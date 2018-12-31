import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WelcomeMessage.scss';

export class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: this.props.username || ''
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    this.props.identifyUser(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="welcome-message">
        <h2>Who are you?</h2>
        <p>Before you can start chatting, you must set a username.</p>
        <form
          className="form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="form-field">
            <input
              type="text"
              className="form-field-control"
              placeholder="(e.g. CoolPerson123)"
              value={this.state.value}
              required
              pattern="\w+"
              minLength="3"
              maxLength="20"
              onChange={(e) => this.handleChange(e)}
            />
            <div className="form-field-description">
              Your username can only contain 3–20 alphanumeric characters (no spaces, symbols, etc).
            </div>
          </div>
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary">
              Let’s go!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

WelcomeMessage.propTypes = {
  username: PropTypes.string,
  identifyUser: PropTypes.func.isRequired
};

export default WelcomeMessage;
