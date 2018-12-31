import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.scss';
import UserApp from './containers/UserApp';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.getElementById('root')
);
