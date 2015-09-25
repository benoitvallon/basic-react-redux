'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(counter, initialState);

// We render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.

const component = (
  <Provider store={store}>
    <Router routes={routes} history={createBrowserHistory()}/>
  </Provider>
);

ReactDOM.render(component, document.getElementById('content'));
ReactDOM.render(<div>
  {component}
  <DebugPanel top right bottom key="debugPanel">
    <DevTools store={store} monitor={LogMonitor}/>
  </DebugPanel>
</div>, document.getElementById('content'));
