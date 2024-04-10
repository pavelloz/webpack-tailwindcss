const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const DIST_DIR = path.resolve(__dirname, 'dist');
const config = {
  output: {
    path: DIST_DIR,
    chunkFilename: '[name].[chunkhash:4].js',
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
        test: /\.(png|jp?g|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:4][ext]',
        },
      },
      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name].[hash:4][ext]',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: DIST_DIR, // must be the same as output.path
    },
    watchFiles: {
      paths: ['src/**/*.*'],
    },
    port: 8888,
  },
  watchOptions: {
    aggregateTimeout: 300,
  },
  plugins: [
    new HtmlBundlerPlugin({
      // Documentation: https://github.com/webdiscus/html-bundler-webpack-plugin
      entry: 'src/',
      js: {
        inline: production, // inline JS for production mode, extract JS file for development mode
      },
      css: {
        inline: production, // inline CSS for production mode, extract CSS file for development mode
      },
      minify: 'auto', // minify html
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
