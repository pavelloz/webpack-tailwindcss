const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './src/js/app'
  },
  output: {
    path: path.resolve('app'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:3].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader"
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
    },
    watchFiles: ['src/*'],
    compress: true,
    port: 8080,
  },
  watchOptions: {
    aggregateTimeout: 200
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new ESBuildMinifyPlugin({
        css: true
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: prod ? 'production' : 'development',
  stats: prod ? 'normal' : 'minimal'
};

module.exports = config;
