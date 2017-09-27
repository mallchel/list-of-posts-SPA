const posts = (state = [], action) => {
  switch (action.type) {
    case 'getPosts':
      return [
        ...state,
        {
          id: 'action.id',
          text: 'action.text',
          completed: false
        }
      ];
    case 'getComments':
      return state.map(todo => todo);
    default:
      return state;
  }
}

export default posts;