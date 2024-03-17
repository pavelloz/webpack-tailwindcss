const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const config = {
	output: {
		path: path.resolve('dist'),
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
			// Documentation: https://github.com/webdiscus/html-bundler-webpack-plugin
			entry: {
				index: 'src/index.html', // => dist/index.html (key is output filename w/o '.html')
			},
			js: {
				filename: 'js/[name].[contenthash:4].js',
				inline: production, // inline JS for production mode, extract JS file for development mode
			},
			css: {
				filename: 'css/[name].[contenthash:4].css',
				inline: production, // inline CSS for production mode, extract CSS file for development mode
			},
			minify: 'auto',
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
