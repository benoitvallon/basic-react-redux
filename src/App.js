'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './app.scss';

import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter';
import { fetchPosts } from './actions/posts';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('graphql'));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(fetchPosts('reactjs'));
  }

  render() {
    // Injected by connect() call:
    const { dispatch, counter, posts } = this.props;

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
          <a href='#'
             onClick={this.handleRefreshClick}>
            Refresh
          </a>
        </div>
        {posts.length > 0 &&
          <div>
            <ul>
              {posts.map((post, i) =>
                <li key={i}>{post.title}</li>
              )}
            </ul>
          </div>
        }
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  const { counter } = state.counter;
  const { posts } = state.posts;

  return {
    counter,
    posts
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
