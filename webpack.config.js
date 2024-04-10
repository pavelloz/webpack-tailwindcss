const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const OUTPUT_PATH = path.resolve('dist');

const config = {
  output: {
    path: OUTPUT_PATH,
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
        test: /\.(ico|png|jp?g|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:4][ext]',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: OUTPUT_PATH, // must be the same as output.path
    },
    watchFiles: {
      paths: ['src/**/*.*'],
    },
    port: 8888,
  },
  devtool: production ? 'hidden-source-map' : 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 300,
  },
  plugins: [
    new HtmlBundlerPlugin({
      // Documentation: https://github.com/webdiscus/html-bundler-webpack-plugin
      entry: {
        index: 'src/index.html', // => dist/index.html (key is output filename w/o '.html')
      },
      js: {
        inline: true,
      },
      css: {
        inline: true,
      },
      minify: production, // minify html
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
