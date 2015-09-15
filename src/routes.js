'use strict';

import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';

export default [
  { path: '/', component: App },
  { path: '/about', component: About },
  { path: '/home', component: Home }
];
