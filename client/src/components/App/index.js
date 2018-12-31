import React from 'react';
import './App.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Meta from '../Meta';
import Modal from '../Modal';
import WelcomeUserMessage from '../../containers/WelcomeUserMessage';

const App = ({ username }) => {
  if (username) {
    return (
      <div className="app">
        <div className="app-container">
          <Sidebar />
          <Main />
          <Meta />
        </div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Modal
          render={() => <WelcomeUserMessage />}
          solidBackdrop
        />
      </div>
    );
  }
};

export default App;
