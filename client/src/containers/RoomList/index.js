import { connect } from 'react-redux';
import { addRoom, removeRoom } from '../../actions';
import RoomList from '../../components/RoomList';

const mapStateToProps = (state) => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  addRoom: (room) => dispatch(addRoom(room)),
  removeRoom: (room) => dispatch(removeRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);
