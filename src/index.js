'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

let store = createStore(counter, initialState);

// We render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={createBrowserHistory()}/>
  </Provider>,
  document.getElementById('content')
);
