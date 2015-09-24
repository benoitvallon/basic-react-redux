'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import compression from 'compression';

const app = express();
var host = 'localhost';
var port = 9000;

import routes from './routes';
import createLocation from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

import Html from './Html';

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(require('serve-static')(path.join(__dirname, '..', 'public')));

app.use((req, res) => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (_development_) {
    webpackIsomorphicTools.refresh();
  }

  let location = createLocation(req.url);
  let store = createStore(counter);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (renderProps === null) {
      res.send(404, 'Not found');
    } else {
      const component = (
        <Provider store={store}>
          <RoutingContext {...renderProps}/>
        </Provider>
      );

      res.send('<!doctype html>\n' +
          ReactDOMServer.renderToString(<Html store={store} assets={webpackIsomorphicTools.assets()} component={component}/>));
    }
  });
});

app.listen({
  host: host,
  port: port
}, function () {
  console.log('Server listening at http://%s:%s', host, port);
});
