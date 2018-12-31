import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import './Chatroom.scss';

const Chatroom = ({ messages, addMessage }) => (
  <div className="chatroom">
    <MessageList messages={messages} />
    <MessageForm onSendMessage={(msg) => addMessage(msg)} />
  </div>
);

Chatroom.propTypes = {
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
};

export default Chatroom;
