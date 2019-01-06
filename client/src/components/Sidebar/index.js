import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal';
import './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    room: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      joinModalOpen: false,
      joinRoom: '',
      availableRooms: [props.room]
    };
  }

  handleButtonClick() {
    this.setState({
      joinModalOpen: true
    });
  }

  handleJoinModalClose() {
    this.setState({
      joinRoom: '',
      joinModalOpen: false
    });
  }

  handleJoinModalFieldChange(e) {
    this.setState({
      joinRoom: e.target.value
    });
  }

  handleJoinModalFormSubmit(e) {
    const requestedRoom = this.state.joinRoom.toLowerCase();

    if (!this.state.availableRooms.includes(requestedRoom)) {
      this.setState({
        availableRooms: [
          requestedRoom,
          ...this.state.availableRooms
        ].sort()
      });
    }

    this.handleJoinModalClose();
    e.preventDefault();
  }

  render() {
    return (
      <div className="sidebar">
        <section className="sidebar-section">
          <header className="sidebar-section-header">
            Rooms
            <button
              type="button"
              className="sidebar-section-header-button"
              onClick={(e) => this.handleButtonClick(e)}
            >
              + Join room
            </button>
          </header>
          <ul className="sidebar-section-list">
            {this.state.availableRooms.map((room) => (
              <li
                key={room}
                className="sidebar-section-list-item sidebar-section-list-item-room">
                <NavLink to={`/rooms/${room}`} activeClassName="selected">
                  {room}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
        <Modal
          open={this.state.joinModalOpen}
          userCanClose
          handleClose={() => this.handleJoinModalClose()}
          render={() => (
          <div>
            <h2>Join a room</h2>
            <form
              className="form"
              onSubmit={(e) => this.handleJoinModalFormSubmit(e)}
            >
              <div className="form-field">
                <input
                  type="text"
                  className="form-field-control"
                  placeholder="(e.g. random)"
                  value={this.state.joinRoom}
                  required
                  pattern="[a-zA-Z]+"
                  minLength="3"
                  maxLength="20"
                  onChange={(e) => this.handleJoinModalFieldChange(e)}
                />
                <div className="form-field-description">
                  Room names can only be 3–20 characters long, without any spaces, numbers or any other characters besides letters.
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary">
                  Join room
                </button>
              </div>
            </form>
          </div>
        )} />
      </div>
    );
  }
}

export default Sidebar;
