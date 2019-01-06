import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';
import ChatroomContainer from '../../containers/Chatroom';

const Main = ({room}) => (
  <div className="main">
    <ChatroomContainer room={room} />
  </div>
);

Main.propTypes = {
  room: PropTypes.string.isRequired
};

export default Main;
