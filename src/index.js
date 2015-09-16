'use strict';

import React from 'react';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

// We render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render(
  <Router routes={routes} history={createBrowserHistory()}/>,
  document.getElementById('content')
);
