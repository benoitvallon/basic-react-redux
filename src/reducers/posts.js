'use strict';

import { RECEIVE_POSTS, REQUEST_POSTS } from '../actions/posts';

export default function posts(state = {
  posts: []
}, action) {
  switch (action.type) {
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      posts: action.posts
    });
  case REQUEST_POSTS:
    return state;
  default:
    return state;
  }
}
