import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Meta from '../Meta';

const App = () => (
  <div className="app">
    <Sidebar />
    <Main />
    <Meta />
  </div>
);

export default App;
