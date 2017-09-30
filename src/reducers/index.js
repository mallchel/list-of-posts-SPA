import { combineReducers } from 'redux'

import posts from './posts'
import comments from './comments'

const reducers = combineReducers({
  posts,
  comments
})

export default reducers;