'use strict';

import React from 'react';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

let store = createStore(counter);

// We render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render(
  <Provider store={store}>
    {() => <Router routes={routes} history={createBrowserHistory()}/>}
  </Provider>,
  document.getElementById('content')
);
