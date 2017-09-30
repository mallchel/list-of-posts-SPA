import fetch from 'isomorphic-fetch'

export const requestPosts = () => ({
  type: 'REQUEST_POSTS',
});

export const receivePosts = (json) => ({
  type: 'RECEIVE_POSTS',
  posts: json,
  receivedAt: Date.now(),
});

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)));
}

export const requestComments = () => ({
  type: 'REQUEST_COMMENTS'
});

export const receiveComments = (postId, json) => ({
  type: 'RECEIVE_COMMENTS',
  comments: json,
  postId: postId,
  receivedAt: Date.now(),
});

export const fetchComments = postId => dispatch => {
  dispatch(requestComments());
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveComments(postId, json)));
}
