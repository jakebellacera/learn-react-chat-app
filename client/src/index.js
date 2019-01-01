import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import fetchMiddleware from './utils/middleware/fetchMiddleware';
import socketMiddleware from './utils/middleware/socketMiddleware';
import reducer from './reducers';
import './index.scss';
import UserApp from './containers/UserApp';

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    fetchMiddleware(),
    socketMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.getElementById('root')
);
