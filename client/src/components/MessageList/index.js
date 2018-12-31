import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.scss';

const MessageList = ({ messages }) => (
  <ul className="messagelist">
    {messages.map(({ username, body }, i) => (
      <li key={i} className="messagelist-item">
        <div className="messagelist-item-username">
          {username}
        </div>
        <div className="messagelist-item-body">
          {body}
        </div>
      </li>
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
