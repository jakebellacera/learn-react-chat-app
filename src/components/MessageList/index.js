import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.scss';

const MessageList = ({ messages }) => (
  <ul className="messagelist">
    {messages.map((msg) => (
      <li className="messagelist-item">
        {msg.body}
      </li>
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
