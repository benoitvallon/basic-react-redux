'use strict';

import React, { Component } from 'react';
import styles from "./app.scss";

export default class App extends Component {
  render() {
    return (
      <h1 className={styles['my-title']}>Hello, world!</h1>
    );
  }
}
