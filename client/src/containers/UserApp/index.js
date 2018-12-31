import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = state => ({
  username: state.user.username
});

export default connect(
  mapStateToProps
)(App);
