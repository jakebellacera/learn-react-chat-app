import { connect } from 'react-redux';
import { postMessage, subscribeToMessages } from '../../actions';
import Chatroom from '../../components/Chatroom';

const mapStateToProps = (state, ownProps) => ({
  username: state.user.username,
  messages: state.messages.filter(m => m.room === ownProps.room),
  room: ownProps.room
});

const mapDispatchToProps = dispatch => ({
  postMessage: (room, username, body) => dispatch(postMessage(room, username, body)),
  subscribeToMessages: () => dispatch(subscribeToMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
