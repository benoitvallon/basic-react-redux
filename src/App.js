'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './app.scss';

import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter';

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, counter } = this.props;

    return (
      <div>
        <h1 className={styles['my-title']}>Hello, welcome to my app!</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
        <div>
          Clicked: {counter} times
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    counter: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
