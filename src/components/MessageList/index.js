import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.scss';

const MessageList = ({ messages }) => (
  <ul className="messagelist">
    {messages.map(({ body }, i) => (
      <li key={i} className="messagelist-item">
        {body}
      </li>
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
