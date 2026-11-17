# liamhastings.github.io

My personal site and CV, built with React.

Live at [liamhastings.github.io](https://liamhastings.github.io/).

Single page with a sticky top nav, light/dark theme (persisted to
`localStorage`), a first-person intro, and sections for projects, about,
skills, experience, education, and contact. Section content lives in the
components under `src/components/` as plain data arrays.

Projects marked `featured: true` in `src/components/Portfolio.js` get a large
panel with their engineering highlights shown in full. The rest sit in a
compact row with expandable engineering details.

The typeface is [Recursive](https://www.recursive.design/), loaded from Google
Fonts in `public/index.html`.

## Local development

```sh
npm install
npm start
```

## Deploy

```sh
npm run deploy
```

Publishes the production build to the `gh-pages` branch.
