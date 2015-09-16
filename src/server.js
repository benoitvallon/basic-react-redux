'use strict';

import express from 'express';
import React from 'react';
const app = express();
var host = 'localhost';
var port = 9000;

import routes from './routes';
import createLocation from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router';

import Html from './Html';

app.use((req, res) => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (_development_) {
    webpackIsomorphicTools.refresh();
  }

  let location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (renderProps === null) {
      res.send(404, 'Not found');
    } else {
      const component = (
        <RoutingContext {...renderProps}/>
      );

      res.send('<!doctype html>\n' +
          React.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component}/>));
    }
  });
});

app.listen({
  host: host,
  port: port
}, function () {
  console.log('Server listening at http://%s:%s', host, port);
});
