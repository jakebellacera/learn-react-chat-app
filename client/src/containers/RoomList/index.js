import { connect } from 'react-redux';
import { addRoom } from '../../actions';
import RoomList from '../../components/RoomList';

const mapStateToProps = (state) => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  addRoom: (room) => dispatch(addRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
