import React, { Component } from 'react';
import styles from "./app.css";

export default class App extends Component {
  render() {
    return (
      <h1 className={styles['my-title']}>Hello, world!</h1>
    );
  }
}
