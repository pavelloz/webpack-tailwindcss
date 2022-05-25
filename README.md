# webpack-tailwindcss

This template is made to help start your project based on Webpack + TailwindCSS.
JS is built and minified by ESBuild to keep it fast no matter what you do.

Build preview: https://pavelloz.github.io/webpack-tailwindcss/

## Usage

1) To use this template, click "Use this template" green button in the top right.
2) Clone the repository to your computer
3) Install dependencies - `npm ci`
4) Configure where your views are in [tailwind.config.js](https://github.com/pavelloz/webpack-tailwindcss-purgecss/blob/master/tailwind.config.js).

### npm tasks
* `npm start` - runs dev server on `http://localhost:8080` and reloads the browser on changes
* `npm run build` - build assets in production mode, ready to deploy

## Webpack setup includes
* JS and CSS transpilation and minification done by ESBuild (FAST)
* CSS extraction using `mini-css-extract-plugin`
* HTML generation using `html-webpack-plugin`
* Examples:
  * Prefetched chunk, if you want to load faster critical parts of your build
  * Asynchronously loaded chunks, to block page rendering when loading/parsing/executing
  * Named chunks if you dont want your chunks to look like `2aae6c35c94fcfb415dbe95f408b9ce91ee846ed.js`

## PostCSS setup includes
* [autoprefixer](https://github.com/postcss/autoprefixer) - Adding vendor prefixes, just in case. See package.json for `browserslist` config
* [postcss-import](https://github.com/postcss/postcss-import) - Support for @imports - just like in SASS

## TailwindCSS setup includes
* Official [TailwindCSS forms](https://tailwindcss.com/docs/plugins#forms) plugin loaded
* Examples:
  * Extending default color palette
  * Setting custom font as first in font family declaration
  * Custom (`xxl`) breakpoint for responsive purposes
  * Custom variant for border width property

## Notes
* Before every build, build directory (`dist`) is deleted to avoid deploying old assets

## Additional resources

* [Tailwind.run](https://tailwind.run/new) - sandbox for quickly mocking/debugging components in isolation
* [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. Hopefully will be updated to the latest TailwindCSS version soon
* [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Custom config aware autocomplete for TailwindCSS
* [Webpack dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) - How and why do the dynamic imports. See [`js/app.js`](src/js/app.js) for example.

## Happy coding!

## TODO

* Write simple codeceptjs test run on the example, after the deployment
