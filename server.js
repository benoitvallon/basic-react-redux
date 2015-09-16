'use strict';

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config), config.devServer)
  .listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Webpack server listening at localhost:3000');
  }
);
