# liamhastings.github.io

My personal site and CV, built with React.

Live at [liamhastings.github.io](https://liamhastings.github.io/).

Single page with a sticky section nav, light/dark theme (persisted to
`localStorage`), and sections for about, skills, projects, experience,
education, and contact. Section content lives in the components under
`src/components/` as plain data arrays.

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
