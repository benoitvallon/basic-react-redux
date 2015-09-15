'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';

// We render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
  </Router>
), document.body)
