'use strict';

var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
    require('./webpack-isomorphic-tools-configuration'));

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, '/public/build'),
    publicPath: '/build/',
    // filename: 'build-client-script.js',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     'style-loader',
      //     'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
      //     'autoprefixer-loader?browsers=last 2 versions',
      //     'sass-loader?outputStyle=expanded&sourceMap'
      //   ]
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        )
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
    new CleanPlugin(['./public/build']),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
    // new webpack.HotModuleReplacementPlugin(),
    webpackIsomorphicToolsPlugin
  ],
  progress: true, // Display a compilation progress to stderr
  devtool: 'source-map'
};
