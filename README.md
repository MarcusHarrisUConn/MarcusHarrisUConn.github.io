# Marcus Harris – Academic Website

This repository contains the source for my academic website, built with **Quarto** and hosted on **GitHub Pages**. The site is designed to be reproducible, easy to update, and easy for others to fork as a template.

## What This Site Is
- A personal academic website (profile, research, CV, essays).
- A reproducible Quarto project that renders to a static site.
- Hosted via GitHub Pages from the `docs/` folder.

## Reproducible Workflow
The site is generated from source files and always rebuilt the same way:
1. Edit content in `.qmd` (or `.md`) files.
2. Run `quarto render`.
3. Commit the changes (including `docs/`).
4. Push to GitHub.

GitHub Pages serves the contents of `docs/`, ensuring the live site matches the rendered output.

## Project Structure
- `_quarto.yml` – site configuration (nav, title, output folder).
- `custom.scss` – site styling/theme.
- `index.qmd` – homepage.
- `profile.qmd` – bio + headshot.
- `research.qmd` – research page with collapsible sections.
- `cv.qmd` – CV page (PDF embed).
- `essays.qmd` – listing page for essays.
- `essays/` – individual essay posts.
- `assets/` – images and PDFs.
- `docs/` – rendered site (GitHub Pages deploys this folder).

## Build the Site Locally
1. Install Quarto: https://quarto.org
2. From the project folder:
   ```powershell
   quarto render
   ```
3. Preview locally:
   ```powershell
   quarto preview
   ```

## Add a New Essay
Create a new file in `essays/` (Quarto or Markdown):

```markdown
---
title: "My Essay Title"
date: 2026-03-13
description: "One-sentence summary."
categories: [measurement, meta-research]
---

Your essay content here...
```

The essays page (`essays.qmd`) automatically lists all posts in `essays/` when you re-render.

## Update the CV
Replace `assets/CV.pdf` with your latest CV and re-render:
```powershell
quarto render
```

The CV page (`cv.qmd`) embeds this PDF and provides a download link.

## How to Use This as a Template
1. Fork the repository.
2. Edit `_quarto.yml` (title, nav).
3. Replace content in `index.qmd`, `profile.qmd`, `research.qmd`, and `cv.qmd`.
4. Replace images in `assets/` (headshot, logos).
5. Run `quarto render` and push.

## GitHub Pages Setup
In your GitHub repo:
- Settings ? Pages ? Deploy from a branch
- Branch: `main`
- Folder: `/docs`

Your site will be available at:
`https://YOUR-USERNAME.github.io`

---

If you use this template, feel free to adapt the design and structure to match your field and workflow.
