import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const dataFile = new URL('../public/data/portfolio.json', import.meta.url)
const data = JSON.parse(await readFile(dataFile, 'utf8'))
const errors = []

function requireObject(value, path) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) errors.push(`${path} must be an object`)
}

function requireArray(value, path, { allowEmpty = false } = {}) {
  if (!Array.isArray(value)) errors.push(`${path} must be an array`)
  else if (!allowEmpty && value.length === 0) errors.push(`${path} must not be empty`)
}

function requireString(value, path) {
  if (typeof value !== 'string' || value.trim() === '') errors.push(`${path} must be a non-empty string`)
}

function validateLink(value, path) {
  requireString(value, path)
  if (typeof value !== 'string') return
  if (!/^(https?:\/\/|mailto:|tel:|#)/.test(value)) errors.push(`${path} must be an absolute URL or supported link`)
}

async function validateLocalAsset(value, path) {
  if (typeof value !== 'string' || !value.startsWith('/')) return
  try {
    await access(resolve('public', value.slice(1)))
  } catch {
    errors.push(`${path} points to a missing public asset: ${value}`)
  }
}

for (const key of ['site', 'profile', 'currentRole', 'sections', 'impact', 'contact']) requireObject(data[key], key)
for (const key of ['navigation', 'skills', 'experience', 'projects', 'process', 'faq', 'socials']) requireArray(data[key], key)

for (const sectionName of ['hero', 'projects', 'about', 'process', 'impact', 'faq', 'contact', 'footer']) {
  requireObject(data.sections?.[sectionName], `sections.${sectionName}`)
  for (const [key, value] of Object.entries(data.sections?.[sectionName] ?? {})) {
    requireString(value, `sections.${sectionName}.${key}`)
  }
}

for (const key of ['title', 'brand', 'copyright']) requireString(data.site?.[key], `site.${key}`)
for (const key of ['name', 'firstName', 'lastName', 'greeting', 'role', 'bio', 'availability']) requireString(data.profile?.[key], `profile.${key}`)
requireArray(data.profile?.about, 'profile.about')
requireArray(data.profile?.stats, 'profile.stats')

const ids = new Set()
const validStatuses = new Set(['published', 'coming-soon'])
let featuredCount = 0

for (const [index, project] of (data.projects ?? []).entries()) {
  const path = `projects[${index}]`
  requireObject(project, path)
  for (const key of ['id', 'title', 'subtitle', 'role', 'timeline', 'platform', 'status']) {
    requireString(project[key], `${path}.${key}`)
  }
  requireArray(project.tags, `${path}.tags`)
  requireArray(project.images, `${path}.images`, { allowEmpty: true })

  if (ids.has(project.id)) errors.push(`${path}.id duplicates project ID "${project.id}"`)
  ids.add(project.id)
  if (!validStatuses.has(project.status)) errors.push(`${path}.status must be published or coming-soon`)
  if (project.featured) featuredCount += 1
  if (project.status === 'published' && !project.cover && project.images.length === 0) {
    errors.push(`${path} must provide a cover or image when published`)
  }

  await validateLocalAsset(project.cover, `${path}.cover`)
  for (const [imageIndex, image] of project.images.entries()) {
    await validateLocalAsset(image, `${path}.images[${imageIndex}]`)
  }
}

if (featuredCount !== 1) errors.push(`projects must contain exactly one featured project; found ${featuredCount}`)

for (const [index, item] of (data.navigation ?? []).entries()) {
  requireString(item.label, `navigation[${index}].label`)
  validateLink(item.href, `navigation[${index}].href`)
}

for (const [index, social] of (data.socials ?? []).entries()) {
  requireString(social.name, `socials[${index}].name`)
  validateLink(social.link, `socials[${index}].link`)
}

if (errors.length > 0) {
  console.error(`Portfolio data validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Validated ${data.projects.length} projects, ${data.skills.length} skills, and all local assets.`)
