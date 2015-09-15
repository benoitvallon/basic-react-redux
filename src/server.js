'use strict';

import express from "express";
import React from "react";
import Router from "react-router";
const app = express();
var host = 'localhost';
var port = 9000;

app.get('/*', function (req, res) {
  res.end('welcome');
});

var server = app.listen({
  host: host,
  port: port
}, function () {
  console.log('Server listening at http://%s:%s', host, port);
});
