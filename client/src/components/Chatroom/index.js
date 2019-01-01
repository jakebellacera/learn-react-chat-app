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
    const { username, messages, postMessage } = this.props;

    return (
      <div className="chatroom">
        <MessageList messages={messages} />
        <MessageForm onSendMessage={(msg) => postMessage(username, msg)} />
      </div>
    );
  }
}

Chatroom.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  postMessage: PropTypes.func.isRequired
};

export default Chatroom;
