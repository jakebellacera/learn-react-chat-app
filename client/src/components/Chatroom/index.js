import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import './Chatroom.scss';

class Chatroom extends Component {
  componentDidMount() {
    this.props.subscribeToMessages();
  }

  render() {
    const { room, username, messages, postMessage } = this.props;

    return (
      <div className="chatroom">
        <MessageList room={room} messages={messages} />
        <MessageForm onSendMessage={(msg) => postMessage(room, username, msg)} />
      </div>
    );
  }
}

Chatroom.propTypes = {
  room: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  postMessage: PropTypes.func.isRequired
};

export default Chatroom;
