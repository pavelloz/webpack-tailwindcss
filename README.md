# webpack-tailwindcss-purgecss

This simplistic boilerplate is meant to help you start your project based on Webpack + TailwindCSS without too much complication.

## Its webpack part includes:
* ES6 -> ES5 compilation using `babel-loader`
* JS minification using `terser-webpack-plugin`
* CSS extration using `mini-css-extract-plugin`
* 3 character chunkhash added to chunks, but not to main assets files

## Its PostCSS part includes:
* [PurgeCSS](https://github.com/FullHuman/postcss-purgecss) configured with example of js files in `src/` and liquid files in `app/` and `modules/` - only in webpack's production mode. In dev mode all classes available (732KB+ of them), but production build cleans CSS to contain only used ones (in my case ~2.5KB, most of it from `normalize.css`)
* [autoprefixer](https://github.com/postcss/autoprefixer) - Adding vendor prefixes, just in case. See package.json for `browserslist` config
* [postcss-csso](https://github.com/lahmatiy/postcss-csso) - Minifying your css for you
* [postcss-import](https://github.com/postcss/postcss-import) - Support for @imports - just like in SASS
* [postcss-fixes](https://github.com/MattDiMu/postcss-fixes) - Various fixes improving your CSS cross-browser compatibility

## Its TailwindCSS part includes:
* Official [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.com/) plugin loaded
* How to extend color pallette
* How to prefix your colors to not collide with default theme
* How to set a different font as first in font family declaration
* Add xxl breakpoint for responsive purposes
* Add `hover` variant to borderWidth (allows you to change border width on element hover using TailwindCSS)


## npm tasks
* `npm start` - runs webpack in watch mode
* `npm run build` - build assets in production mode, minified, unused CSS classes purged
* `npm run build:dev` - build assets in development mode, unminified, full TailwindCSS
* `npm run bs <url>` - runs browser-sync on `<url>` and opens it in your browser. Watches for changes in `app/*`

## Notes
* Images, fonts, etc. are not handled by webpack. Just put them into the dist directory in `fonts/`, `img/`
* Before you build using `npm run build` task, everything in `app/assets/js` and `app/assets/css` is removed to keep the deploys clean

## Additional resources

* [Tailwind.run](https://tailwind.run/new) - sandbox for quickly mocking/debugging components in isolation
* [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. Hopefully will be updated to the latest TailwindCSS version soon
* [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Use [sissel.shopify-liquid](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid) Liquid plugin to increase your chance of it working

Some help in regards to different parts of this setup:
* [BrowserSync documentation](https://www.browsersync.io/docs/command-line) - learn how to tweak browser-sync to your needs
* [Webpack dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) - How and why do the dynamic imports. Example is included in `js/app.js`

## Happy coding!