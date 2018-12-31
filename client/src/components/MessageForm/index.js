import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageForm.scss';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state ={
      message: ''
    };
  }

  handleSubmit(e) {
    this.props.onSendMessage(this.state.message);
    this.setState({message: ''});

    e.preventDefault();
  }

  handleChange(e) {
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <form
        className="messageform"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="messageform-field">
          <input
            type="text"
            className="messageform-field-body"
            placeholder="Say something"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
      </form>
    );
  }
};

MessageForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired
};

export default MessageForm;
