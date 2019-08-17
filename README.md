# webpack-tailwindcss-purgecss

This simplistic boilerplate is meant to help you start your project based on Webpack + TailwindCSS without too much compilcation.

## Its webpack part includes:
* ES6 -> ES5 compilation using `babel-loader`
* JS minification using `terser-webpack-plugin`
* CSS minification using `optimize-css-assets-webpack-plugin`
* CSS extration using `mini-css-extract-plugin`

## Its PostCSS part includes:
* Official [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.com/) plugin
* [PurgeCSS](https://github.com/FullHuman/postcss-purgecss) configured with example of js files in src/ and liquid files in app/ and modules/ - only in webpack's production mode. In dev mode you have all classes available (all 732KB of them), but you deploy to production only the ones you use (in my case, 2.5KB, most of it is `normalize.css`)
* [autoprefixer](https://github.com/postcss/autoprefixer) - Adding vendor prefixes
* [postcss-import](https://github.com/postcss/postcss-import) - Support for @imports
* [postcss-fixes](https://github.com/MattDiMu/postcss-fixes) - Various css fixes improving your css cross-browser compatibility
* Examples in the config file to jumpstart your journey into customizing theme (colors, fonts)

## Notes
* There is no SASS
* Images, fonts, etc. are not handled by webpack. I just put them into the dist directory in `fonts/`, `img/`.
* Before you build using `npm run build` task, everything in `app/assets/js` and `app/assets/css` is removed to keep the deploys clean
* I highly recommend

## Resources
When working with TailwindCSS i found very useful resources:
* [Tailwind.run](https://tailwind.run/new) - sandbox for quick mocking.
* [Cheat sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. hopefully will be updated to the latest version soon
* [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - unfortunately doesnt have support for .liquid files. I opened a PR so hopefully it will support liquid soon.

## Happy coding!