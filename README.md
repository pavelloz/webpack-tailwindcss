# webpack-tailwindcss-purgecss

This template is made to help start your project based on Webpack + TailwindCSS without too much complication while keeping best performance practices set up, so you dont have to worry about basics.

## Usage

1) To use this template, click "Use this template" green button in the top right.
2) Install dependencies - `npm install`
3) Configure where your views are in [postcss.config.js](https://github.com/pavelloz/webpack-tailwindcss-purgecss/blob/master/postcss.config.js).

## npm tasks
* `npm start` - runs `webpack-dev-server` on `http://localhost:8080` and reloads on changes in `src/`
* `npm run build` - build assets in production mode, minified, unused CSS classes purged
* `npm run build:dev` - build assets in development mode, unminified (full TailwindCSS)

## webpack setup includes
* ES6 -> ES5 transpilation using `babel` with `babel-preset-env`
* JS minification using `terser-webpack-plugin`
* CSS extration using `mini-css-extract-plugin`
* 3 character chunkhash added to chunks, but not to entry files
* Prefetched chunk as an example
* Example of naming chunks to know which chunk contains what (instead of numbers/hashes)

## PostCSS setup includes
* [PurgeCSS](https://github.com/FullHuman/postcss-purgecss) configured with example of js files in `src/` and liquid files in `app/` and `modules/` - only in webpack's production mode. In dev mode all classes available (732KB+ of them), but production build cleans CSS to contain only used ones (in my case ~2.5KB, most of it from `normalize.css`)
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
* `hover` variant to borderWidth (allows you to change border width on element hover using TailwindCSS)

## Notes
* Images, fonts, etc. are not handled by webpack. I just put them into the dist directory in `fonts/`, `img/`.
* Before you build using `npm run build` task, everything in `app/assets/js` and `app/assets/css` is removed to keep the deploys clean

## Additional resources

* [Tailwind.run](https://tailwind.run/new) - sandbox for quickly mocking/debugging components in isolation
* [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. Hopefully will be updated to the latest TailwindCSS version soon
* [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Custom config aware autocomplete for TailwindCSS
* [Webpack dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) - How and why do the dynamic imports. See [`js/app.js`](src/js/app.js) for example.

## TODO
~~1) Prepare sirv example with autoreload (update purgecss config)~~ - DONE
~~2) Use webpack-dev-server instead of browsersync because of point 1~~ - DONE
3) Test `cacheGroups` current setting, deeper

## Happy coding!
