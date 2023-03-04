# React component library template

A React component library monorepo template, including a test package and a documentation site.

- The package itself is written in [TypeScript](https://www.typescriptlang.org/), uses [Rollup](https://rollupjs.org/) as a bundler and [Jest](https://jestjs.io/) for testing. It was originally created by following [this tutorial](https://youtu.be/XHQi5a0TmMc).
- The documentation site is powered by [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).
- Additionally, [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are included.

## Scripts

### `npm run build`

Builds the library to the `dist` folder, within the package directory.

### `npm run build:watch`

Same as `build`, but runs in watch mode. This means any change to the source files in `src` will trigger a rebuild.

### `npm run docs`

Runs the documentation site at [http://localhost:3000](http://localhost:3000). The page will auto-update as you edit files within `docs`.

### `npm run docs:build`

Builds the docs site as static files to the `dist` folder within `docs`.

### `npm run format`

Formats all files using Prettier.

### `npm test`

Runs all test in the project.
