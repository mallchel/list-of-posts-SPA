import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
