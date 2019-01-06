import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import fetchMiddleware from './utils/middleware/fetchMiddleware';
import socketMiddleware from './utils/middleware/socketMiddleware';
import reducer from './reducers';
import './index.scss';
import UserApp from './containers/UserApp';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunk,
      fetchMiddleware(),
      socketMiddleware()
    ),
    persistState(['user', 'rooms'])
  )
);

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.getElementById('root')
);
