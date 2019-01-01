import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './MessageList.scss';

const MessageList = ({ messages }) => (
  <ul className="messagelist">
    {messages.map(({ username, createdAt, body }, i) => (
      <li key={i} className="messagelist-item">
        <div className="messagelist-item-username">
          {username}
        </div>
        <time
          className="messagelist-item-date"
          dateTime={moment(createdAt).format('YYYY-MM-DD HH:mm Z')}
        >
          {moment(createdAt).format('h:mm A')}
        </time>
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
