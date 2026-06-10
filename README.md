# Ankita Tadse Portfolio

A React and Vite portfolio for UI/UX and Data Visualization Designer Ankita Tadse.

## Project structure

```text
public/
  data/portfolio.json        Editable portfolio content
  images/                    Locally hosted project artwork
src/
  components/common/         Shared presentation components
  components/layout/         Header and footer
  components/projects/       Project cards, listing, and modal
  components/sections/       Page sections
  hooks/                     Theme and portfolio-data state
  utils/                     Framework-independent helpers
```

## Editing portfolio content

All visible portfolio content is stored in [`public/data/portfolio.json`](public/data/portfolio.json). Edit that file to update profile text, skills, experience, projects, case-study details, impact metrics, FAQs, or contact links without changing React components.

Project images can use either:

- A local public path such as `/images/project-cover.png`
- A complete remote URL such as `https://example.com/project-cover.png`

Projects with `"status": "published"` appear in the main project grid. Projects with `"status": "coming-soon"` appear in the upcoming-work panel. Exactly one project should have `"featured": true`.

After editing the JSON, validate it with:

```bash
npm run check
```

The validator checks required sections, project IDs and statuses, the featured project, and all referenced local image paths.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```
