import React from 'react';
import './Main.scss';
import ChatroomContainer from '../../containers/Chatroom';

const Main = () => (
  <div className="main">
    <ChatroomContainer room="general" />
  </div>
);

export default Main;
