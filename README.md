# Ankita Tadse Portfolio

A React + Vite portfolio for UI/UX and Data Visualization Designer Ankita Tadse.

## Editing portfolio content

All visible portfolio content is stored in [`public/data/portfolio.json`](public/data/portfolio.json). Edit that file to update profile text, skills, experience, projects, case-study details, impact metrics, FAQs, and contact links without changing React components.

Project images can use either:

- A local public path such as `/images/project-cover.png`
- A complete remote URL such as `https://example.com/project-cover.png`

Projects with `"status": "published"` appear in the main project grid. Projects with `"status": "coming-soon"` appear in the upcoming work panel.

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
