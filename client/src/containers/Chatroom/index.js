import { connect } from 'react-redux';
import { postMessage, subscribeToMessages } from '../../actions';
import Chatroom from '../../components/Chatroom';

const mapStateToProps = state => ({
  username: state.user.username,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  postMessage: (username, body) => dispatch(postMessage(username, body)),
  subscribeToMessages: (cb) => dispatch(subscribeToMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
