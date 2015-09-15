'use strict';

import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default [
  { path: '/', component: App },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '*', component: NotFound }
];
