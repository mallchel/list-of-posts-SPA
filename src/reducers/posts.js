import Immutable from 'immutable'

const posts = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return state.set('isFetching', true);
    case 'RECEIVE_POSTS':
      return state.set('isFetching', false)
        .set('items', Immutable.fromJS(action.posts));
    default:
      return state;
  }
}

export default posts;