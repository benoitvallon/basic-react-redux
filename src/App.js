'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles/bootstrap.scss';
import styles from './styles/app.scss';

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
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
