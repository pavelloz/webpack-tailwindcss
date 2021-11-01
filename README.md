# webpack-tailwindcss

This template is made to help start your project based on Webpack + TailwindCSS without too much complication while keeping best performance practices set up, so you dont have to worry about basics.

Local development is aided by livereload.

## Usage

1) To use this template, click "Use this template" green button in the top right.
2) Clone the repository to your computer
3) Install dependencies - `npm ci`
4) Configure where your views are in [tailwind.config.js](https://github.com/pavelloz/webpack-tailwindcss-purgecss/blob/master/tailwind.config.js).

## npm tasks
* `npm start` - runs `live-server` on `http://localhost:8080` and reloads the browser on changes
* `npm run build` - build assets in production mode

## webpack setup includes
* JS and CSS transpilation and minification done by ESBuild (FAST)
* CSS extraction using `mini-css-extract-plugin`
* Example: Prefetched chunk, if you want to load faster critical parts of your build
* Example: Asynchronously loaded chunks, to block page rendering when loading/parsing/executing
* Example: Named chunks if you dont want your chunks to look like `2aae6c35c94fcfb415dbe95f408b9ce91ee846ed.js`

## PostCSS setup includes
* [autoprefixer](https://github.com/postcss/autoprefixer) - Adding vendor prefixes, just in case. See package.json for `browserslist` config
* [postcss-csso](https://github.com/lahmatiy/postcss-csso) - Minifying your css for you
* [postcss-import](https://github.com/postcss/postcss-import) - Support for @imports - just like in SASS
* [postcss-fixes](https://github.com/MattDiMu/postcss-fixes) - Various fixes improving your CSS cross-browser compatibility

## TailwindCSS setup includes
* Official [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.com/) plugin loaded
* How to extend color palette
* How to prefix your colors to not collide with default theme
* How to set a different font as first in font family declaration
* `xxl` breakpoint for responsive purposes

## Notes
* Images, fonts, etc. are not handled by webpack. I put them into the dist directory in `fonts/`, `img/`.
* Before you build using `npm run build` task, everything in `app/assets/js` and `app/assets/css` is removed, to start with a clean slate and never deploy out-of-date assets

## Additional resources

* [Tailwind.run](https://tailwind.run/new) - sandbox for quickly mocking/debugging components in isolation
* [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. Hopefully will be updated to the latest TailwindCSS version soon
* [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Custom config aware autocomplete for TailwindCSS
* [Webpack dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) - How and why do the dynamic imports. See [`js/app.js`](src/js/app.js) for example.

## Happy coding!


### TODO

- [ ] Use TailwindCSS CLI to generate CSS (simpler Webpack config, less npm packages, better performance)
- [ ] Simplify PostCSS config (TailwindCSS will include autoprefixer and minification)