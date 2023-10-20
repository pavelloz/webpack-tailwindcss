const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const config = {
  output: {
    path: path.resolve('dist'),
    clean: true, // clean the 'dist' directory before build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: { target: 'es2015' },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'css-loader', options: { url: false } }, 'postcss-loader'],
      },
      {
        test: /\.(ico|png|jp?g|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // must be the same as output.path
    },
    watchFiles: {
      paths: ['src/**/*.*'],
    },
    compress: true,
    port: 8888,
  },
  watchOptions: {
    aggregateTimeout: 200,
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        // define templates here
        index: 'src/index.html', // => dist/index.html (key is output filename w/o '.html')
      },
      js: {
        // output filename of JS extracted from source script specified in `<script>`
        filename: 'js/[name].[contenthash:4].js',
        inline: production, // inline JS for production mode, extract JS file for development mode
      },
      css: {
        // output filename of CSS extracted from source file specified in `<link>`
        filename: 'css/[name].[contenthash:4].css',
        inline: production, // inline CSS for production mode, extract CSS file for development mode
      },
    }),
  ],
  mode: production ? 'production' : 'development',
  stats: production ? 'normal' : 'minimal',
};

if (production) {
  config.optimization = {
    minimize: production,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  };
}

module.exports = config;
