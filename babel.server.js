'use strict';

//  enable runtime transpilation to use ES6/7 in node
require('babel/register');

global._development_ = process.env.NODE_ENV !== 'production';

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// this must be equal to your Webpack configuration "context" parameter
var path = require('path');
var rootDir = path.resolve(__dirname, '.');

// this global variable will be used later in express middleware
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack-isomorphic-tools-configuration'))
  // enter development mode if needed
  // (for example, based on a Webpack DefinePlugin variable)
  .development(_development_)
  // initializes a server-side instance of webpack-isomorphic-tools
  // (the first parameter is the base path for your project)
  .server(rootDir, function() {
    // webpack-isomorphic-tools is all set now.
    // here goes all your web application code:
    require('./src/server');
  });
