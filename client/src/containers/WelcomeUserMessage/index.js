import { connect } from 'react-redux';
import { identifyUser } from '../../actions';
import WelcomeMessage from '../../components/WelcomeMessage';

const mapStateToProps = state => ({
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({
  identifyUser: (username) => dispatch(identifyUser(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeMessage);
