import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Meta from '../Meta';

const App = () => (
  <div className="app">
    <div className="app-container">
      <Sidebar />
      <Main />
      <Meta />
    </div>
  </div>
);

export default App;
