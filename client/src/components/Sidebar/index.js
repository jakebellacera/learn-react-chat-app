import React from 'react';
import RoomList from '../../containers/RoomList';
import './Sidebar.scss';

const Sidebar = ({ room }) => (
  <div className="sidebar">
    <RoomList room={room} />
  </div>
);

export default Sidebar;
