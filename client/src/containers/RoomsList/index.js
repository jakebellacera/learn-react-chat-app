import { connect } from 'react-redux';
import { addRoom } from '../../actions';
import RoomsList from '../../components/RoomsList';

const mapStateToProps = (state) => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => ({
  addRoom: (room) => dispatch(addRoom(room))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsList);
