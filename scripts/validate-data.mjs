import { readFile } from 'node:fs/promises'

const data = JSON.parse(await readFile(new URL('../public/data/portfolio.json', import.meta.url), 'utf8'))
const requiredSections = ['site', 'navigation', 'profile', 'skills', 'experience', 'projects', 'process', 'impact', 'faq', 'contact', 'socials']
const missingSections = requiredSections.filter((key) => data[key] == null)

if (missingSections.length) throw new Error(`Missing portfolio sections: ${missingSections.join(', ')}`)
if (!Array.isArray(data.projects) || data.projects.length === 0) throw new Error('At least one project is required')

const ids = data.projects.map(({ id }) => id)
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)
if (duplicateIds.length) throw new Error(`Duplicate project IDs: ${[...new Set(duplicateIds)].join(', ')}`)

for (const project of data.projects) {
  for (const key of ['id', 'title', 'subtitle', 'status', 'tags']) {
    if (project[key] == null) throw new Error(`Project ${project.id || '(unknown)'} is missing ${key}`)
  }
}

console.log(`Validated ${data.projects.length} projects and ${requiredSections.length} portfolio sections.`)
