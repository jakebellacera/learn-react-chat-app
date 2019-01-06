import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Modal from '../Modal';
import WelcomeUserMessage from '../../containers/WelcomeUserMessage';

const DEFAULT_ROOM = 'general';

const App = ({ username }) => (
  <Router>
    <div className="app">

      <Route exact path="/" render={() => {
        if (username) {
          return <Redirect to={`/rooms/${DEFAULT_ROOM}`} />;
          } else { 
          return <Redirect to="/login" />;
        }
      }} />

      <Route path="/login" render={() => {
        if (username) {
          return <Redirect to={`/rooms/${DEFAULT_ROOM}`} />;
        } else {
          return (
            <Modal
              render={() => <WelcomeUserMessage />}
              open
              solidBackdrop
            />
          );
        }
      }} />

      <Route path="/rooms/:room" render={({match}) => {
        const { room } = match.params;

        if (username && room) {
          return (
            <div className="app-container">
              <Sidebar room={room} />
              <Main room={room} />
            </div>
          );
        } else if (username) {
          // redirect to default room
          return <Redirect to={`/rooms/${DEFAULT_ROOM}`} />;
        } else {
          // redirect to login screen
          return <Redirect to="/login" />;
        }
      }} />

    </div>
  </Router>
);

export default App;
