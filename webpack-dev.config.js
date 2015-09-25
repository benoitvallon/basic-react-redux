'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
    require('./webpack-isomorphic-tools-configuration'));

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3000/assets/',
    // filename: 'build-client-script.js',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'autoprefixer-loader?browsers=last 2 versions',
          'sass-loader?outputStyle=expanded&sourceMap'
        ]
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loaders: [
          'url-loader?limit=10240'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      _DEVELOPMENT_: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    webpackIsomorphicToolsPlugin.development()
  ],
  progress: true, // Display a compilation progress to stderr
  devtool: 'inline-source-map',
  devServer : {
    publicPath: 'http://localhost:3000/assets/',
    // contentBase: 'http://localhost:3000',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true // Use colors to display the statistics
    },
    inline: true,
    // quiet: true,
    // noInfo: true,
    // lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};
