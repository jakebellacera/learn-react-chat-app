import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import Chatroom from '../../components/Chatroom';

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  addMessage: (body) => dispatch(addMessage(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
