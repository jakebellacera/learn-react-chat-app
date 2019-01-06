import { combineReducers } from 'redux';
import user from './User';
import rooms from './Rooms';
import messages from './Messages';

export default combineReducers({
  user,
  messages,
  rooms
});
