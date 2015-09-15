'use strict';

import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className={styles['my-title']}>Hello, welcome to my app!</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </div>
    );
  }
}
