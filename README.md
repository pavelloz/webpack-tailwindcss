# webpack-tailwindcss

This template is made to help start your project based on Webpack + TailwindCSS.
JS is built and minified by ESBuild to keep it fast no matter what you do.

Build preview is available at: https://pavelloz.github.io/webpack-tailwindcss/

## Quickest start

Having this boilerplate ready to run on your machine is as easy as typing:

    npx degit pavelloz/webpack-tailwindcss new-project

## Usage

1. To use this template, click "Use this template" green button in the top right.
2. Clone the repository to your computer
3. Install dependencies - `pnpm i`
4. Configure where your views are in [tailwind.config.js](https://github.com/pavelloz/webpack-tailwindcss-purgecss/blob/master/tailwind.config.js).

### npm/pnpm tasks

- `pnpm start` - runs dev server on `http://localhost:8888` and reloads the browser on changes
- `pnpm build` - build assets in `production` mode, ready to deploy

## Webpack setup includes

- JS and CSS transpilation and minification done by ESBuild (meaning: its FAST)
- HTML generation using `html-bundler-webpack-plugin`
- SourceMaps:
  - In `development` mode: they are inlined to provide you the best development experience
  - In `production` mode: they are emitted next to the source .js file but not referenced inside of it. You should take care of uploading them to your error reporting tool
- Examples of some webpack specific features are also included:
  - Prefetched chunk, if you want to load faster critical parts of your build
  - Asynchronously loaded chunks, to not block page rendering when loading/parsing/executing
  - Named chunks if you want your chunks to have pretty names instead of SHA (ie. `2aae6c35c94fcfb415dbe95f408b9ce91ee846ed.js`)

## Inlined JS/CSS entry points

Webpack (or rather, `html-bundler-webpack-plugin`) will inline entry points of JS and CSS into the HTML file. This is concious decision because entry points are small and rest of the app is loaded asynchronously. I highly recommend keeping it this way and working loading your code effectively.

1. CSS: TailwindCSS is small and won't grow much
  a. When you import 3rd party code, you should import css in async loaded chunk, so the CSS is extracted to a separate file
2. JS: You should leverage webpack async chunks to split your app into smaller chunks (which are emitted and not inlined). See examples for more guidance.

Inlined entry points are not emitted to dist/ directory - they are only inlined. This also can be configured in `html-bundler-webpack-plugin`.

If for whatever reason you do not want this behavior here is [the documentation to change it](https://github.com/webdiscus/html-bundler-webpack-plugin?tab=readme-ov-file#recipe-inline-js).

## PostCSS setup includes

- [autoprefixer](https://github.com/postcss/autoprefixer) - Adding vendor prefixes, just in case. See package.json for `browserslist` config
- [postcss-import](https://github.com/postcss/postcss-import) - Support for @imports - just like in SASS

## TailwindCSS setup includes

- Official [TailwindCSS forms](https://tailwindcss.com/docs/plugins#forms) plugin loaded
- Examples:
  - Extending default color palette
  - Setting custom font as first in font family declaration
  - Custom (`xxl`) breakpoint for responsive purposes
  - Custom variant for border width property

## Notes

- Before every build, build directory (`dist`) is deleted to avoid deploying old assets

## Additional resources

- [Tailwind.run](https://tailwind.run/new) - sandbox for quickly mocking/debugging components in isolation
- [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - with search. Hopefully will be updated to the latest TailwindCSS version soon
- [VSCode IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Custom config aware autocomplete for TailwindCSS
- [Webpack dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) - How and why do the dynamic imports. See [`js/app.js`](src/js/app.js) for example.

## E2E tests

TODO

## Happy coding!

## TODO

- Write simple e2e test run on the example, after the deployment
- Split webpack configs into common + dev/prod to avoid pushing to plugins array
  - Add sourcemaps
