import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import './Chatroom.scss';

const Chatroom = ({ username, messages, addMessage }) => (
  <div className="chatroom">
    <MessageList messages={messages} />
    <MessageForm onSendMessage={(msg) => addMessage(username, msg)} />
  </div>
);

Chatroom.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
};

export default Chatroom;
