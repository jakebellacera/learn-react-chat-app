import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import Chatroom from '../../components/Chatroom';

const mapStateToProps = state => ({
  username: state.user.username,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  addMessage: (username, body) => dispatch(addMessage(username, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
