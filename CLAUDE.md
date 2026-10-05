# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview
- **What:** My personal site and CV — a single-page portfolio with a sticky section nav, light/dark theme, and sections for about, skills, projects, experience, education, and contact. Live at https://liamhastings.github.io/.
- **Stack:** JavaScript, React 19, Create React App (`react-scripts` 5), plain CSS (one stylesheet per component). Deployed to GitHub Pages via `gh-pages`. No backend, no router, no state library.
- **Structure:** `src/App.js` (layout root + theme state), `src/components/` (one component per section, each with an optional matching `.css`), `src/index.css` / `src/App.css` (global styles and theme variables), `public/` (static assets copied as-is: `index.html`, `profilepic.jpeg`, `resume.pdf`).

README.md describes the site at a high level — keep it in sync with user-facing changes.

## Commands
- Install: `npm install`
- Run: `npm start` (dev server on port 3000; also configured as `site` in `.claude/launch.json`)
- Build: `npm run build` — this is the main check. Run it with `CI=true` to make ESLint warnings fail the build, the same way a CI would.
- Test: `CI=true npm test -- --watchAll=false --passWithNoTests` (Jest via `react-scripts`). There are currently no test files, so the build is the real verification.
- Lint/format: ESLint runs as part of `start`/`build` (`react-app` config in `package.json`); no Prettier.
- Deploy: `npm run deploy` — builds and publishes `build/` to the `gh-pages` branch. This updates the live site.

## Architecture
- **Content is data in components.** Each section keeps its content as a plain array/object at the top of its component file (e.g. `projects` in `Portfolio.js`) and maps over it to render. To add or edit a project, job, skill, etc., edit the data, not the JSX below it.
- **Theme:** `App.js` owns `theme` state, initialised from `localStorage` (`'theme'`) or `prefers-color-scheme`, and writes it to `data-theme` on `<html>`. Colors are CSS variables keyed off `[data-theme]` — use those variables in new styles rather than hard-coded colors.
- **Navigation:** `Sidebar.js` links to sections by element `id`. A new section needs both a component with an `id` and a matching entry in the sidebar.
- **Static files** in `public/` are referenced by root-relative paths (e.g. `/resume.pdf`). Replacing the CV or photo means replacing the file in `public/` with the same name.
- `build/` and `node_modules/` are git-ignored; never edit `build/` by hand.

## Workflow
- For anything beyond a small fix, propose a short plan and wait for my approval before writing code.
- Work in small steps. Run the build after each meaningful change.
- A task is only done when `CI=true npm run build` passes. For visual changes, also check the page in the browser preview (light and dark theme, and a narrow mobile width) and show a screenshot as evidence; don't just say it works.
- If the same approach fails 2–3 times, stop and explain what you've tried instead of guessing.
- Never weaken, skip, or delete a test or lint rule to make the build pass. If one seems wrong, explain why and ask.
- Ask before adding any new dependency, and say why it's needed.
- Stay in scope. Don't refactor or "improve" unrelated code; mention it as a suggestion instead.

## Git conventions
- Never commit directly to `main`. Work on a branch named `feat/<short-name>`, `fix/<short-name>`, etc.
- Commit after each completed task, not in one big commit at the end.
- Use Conventional Commits: `type(scope): summary` (types: feat, fix, refactor, docs, test, chore, style).
  - Summary: imperative mood, under 72 characters ("add", not "added").
  - Body: explain *why* the change was made, not what the diff already shows.
  - Footer: `Closes #<issue>` when there is an issue.
- Never force-push, rebase shared branches, or rewrite history. Never push to `gh-pages` manually — only `npm run deploy` writes to it.
- When a feature is finished, open a PR with `gh pr create` including: what changed, why, and how it was tested.

## Code style
- Match the patterns already used in this codebase before introducing new ones (function components, 4-space indentation, single quotes, per-component CSS files).
- Prefer small, single-purpose components and descriptive names over comments.
- Comments explain *why*, not *what*.
- Keep the site accessible: semantic HTML, alt text on images, `rel="noopener noreferrer"` on external links, sufficient contrast in both themes.

## Documentation
- Update `README.md` whenever setup steps, commands, or user-facing behavior change.
- Keep specs and design notes in `docs/`.

## Safety
- Never read, print, or commit `.env` files, API keys, or credentials.
- Ask before deleting files or running destructive commands.
- Ask before running `npm run deploy` — it publishes to the live site.
- Do not change files outside this repository.

## Explaining your work
- I'm using this project to learn as well as to ship. When you finish a task, summarize what you changed and briefly explain any non-obvious decision or technique.
