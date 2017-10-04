import fetch from 'isomorphic-fetch'

function status(response) {
  if (!response.ok) {
    return Promise.reject(new Error(response.status));
  } else {
    return Promise.resolve(response.json());
  }
}

export const requestPosts = () => ({
  type: 'REQUEST_POSTS',
});

export const receivePosts = (json) => ({
  type: 'RECEIVE_POSTS',
  posts: json,
  receivedAt: Date.now(),
});

export const requestPostsFailed = () => ({
  type: 'REQUEST_POSTS_FAILED',
});

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(status)
    .then(json => dispatch(receivePosts(json)))
    .catch(error => dispatch(requestPostsFailed()));
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

export const requestCommentsFailed = () => ({
  type: 'REQUEST_COMMENTS_FAILED',
});

export const fetchComments = postId => dispatch => {
  dispatch(requestComments());
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(status)
    .then(json => dispatch(receiveComments(postId, json)))
    .catch(error => dispatch(requestCommentsFailed()));
}
