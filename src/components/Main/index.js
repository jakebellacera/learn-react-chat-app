import React, { Component } from 'react';
import './Main.scss';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state ={
      messages: []
    };
  }

  handleMessageSend(message) { 
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  render() {
    return (
      <div className="main">
        <MessageList
          messages={this.state.messages}
        />
        <MessageForm
          onSendMessage={(msg) => this.handleMessageSend(msg)}
        />
      </div>
    );
  }
};

export default Main;
