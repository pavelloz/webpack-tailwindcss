## 12 January 2024

- Update Readme to reflect pnpm migration
- Upgrade all npm dependencies

## 23 Oct 2023

- Fix async chunk names
- Remove unnecessary dependencies
- Cleanup npm tasks

## 22 Oct 2023

- Add HTML minification in production mode

## 20 Oct 2023

- [BREAKING] Migrated from `html-webpack-plugin` and its plugins to `html-bundler-webpack-plugin` - Credits: @webdiscus
  - CSS is now inlined in production mode. Configurable in webpack.config.js
  - Main JS is now inlined in production mode. To load asynchronously make sure to use dynamic import.
- Added second dynamic chunk example - without prefetching

## 24 June 2023

- [BREAKING] Removed support for node 14
- [BREAKING] Migrated to pnpm
- [BREAKING] Installed missing optional dependencies (rimraf, cross-env), and changed npm tasks to use them directly instead of npx/pnpx
- [BREAKING] Changed very conservative browserslist string from `last 3 years` to `last 2 versions and >1%`. It will generate more modern build, hopefully smaller and faster. To verify if it satisfies your requirements run `pnpx browserslist "last 2 versions and >1%"` in your terminal and check if browsers you support are there.
- [CI] Sped up Github Actions by caching node_modules
- Upgraded npm dependencies

## 12 April 2023

- Upgraded npm dependencies
- Updated kitchen sink
- [CI] Upgraded Github Actions
- [CI] Added Node 18 to the CI build
- [CI] Made github pages publish only on successful builds

## 26 May 2022

- Added preview on github pages
- Updates readme to describe TailwindCSS examples in the config
- Upgraded npm dependencies

## 14 April 2022

- Add CSS inlining into html file using webpack plugin - only in production mode
- Small refactor of webpack config

## 28 March 2022

- Change build directory from `app` to `dist`
- Do not minify css in `dev` mode
- Do not compile js/css from `node_modules` directory
- Add `src/static` directory for assets not parsed by Webpack loaders
- Add favicon as an example of static file

## 18 February 2022

- Remove `mode: 'jit'` setting
- Remove prefix from classes, so it is now default - less friction when using

## 14 February 2022

- Migrate from `@tailwindcss/custom-forms` to official `@tailwindcss/forms`.
- Include full @tailwindcss/forms demo page as index.html for better debugging and showcase.
- Fix missing index.html in git.
- Migrate to `html-webpack-plugin` to have more options.
- Migrate from livereload to `webpack-dev-server` for speed and convenience.
- Remove postcss-fixes.

## 30 January 2022

- Add index.html to make testing easier. Update tailwind config file to 3.x format. Upgrade all npm dependencies.

## 15 December 2021

- Update to [TailwindCSS 3.0.2](https://github.com/tailwindcss/tailwindcss/releases/tag/v3.0.0)

## 7 February 2020

- Update [TailwindCSS to 1.2.0](https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0)

## 23 January 2020

- Add [Windows support](https://github.com/pavelloz/webpack-tailwindcss-purgecss/commit/83391b03abeb64e9e1c9e4ccc8bf118fe84c788d)
- Add macos and windows to CI
- Remove Node 8 from CI
- Add cross-env and del-cli to fix windows builds
