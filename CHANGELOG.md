14 February 2022
Migrated from `@tailwindcss/custom-forms` to official `@tailwindcss/forms`.
Included full @tailwindcss/forms demo page as index.html for better debugging and showcase.
Fixed missing index.html in git.
Migrated to `html-webpack-plugin` to have more options.
Migrated from livereload to `webpack-dev-server` for speed and convenience.
Removed postcss-fixes.

30 January 2022 - Add index.html to make testing easier. Update tailwind config file to 3.x format. Upgrade all npm dependencies.

15 December 2021 - Updated to [TailwindCSS 3.0.2](https://github.com/tailwindcss/tailwindcss/releases/tag/v3.0.0)

7 February 2020 - Updated [TailwindCSS to 1.2.0](https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0)

23 January 2020 - [Windows support](https://github.com/pavelloz/webpack-tailwindcss-purgecss/commit/83391b03abeb64e9e1c9e4ccc8bf118fe84c788d)

* Add macos and windows to CI
* Remove Node 8 from CI
* Add cross-env and del-cli to fix windows builds
