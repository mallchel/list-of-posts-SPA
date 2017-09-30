import Immutable from 'immutable'

const comments = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case 'REQUEST_COMMENTS':
      return state.set('isFetching', true);
    case 'RECEIVE_COMMENTS':
      return state.set('isFetching', false)
        .setIn(['items', action.postId], Immutable.fromJS(action.comments));
    default:
      return state;
  }
}

export default comments
