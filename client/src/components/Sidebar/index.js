import React from 'react';
import RoomsList from '../../containers/RoomsList';
import './Sidebar.scss';

const Sidebar = ({ room }) => (
  <div className="sidebar">
    <RoomsList room={room} />
  </div>
);

export default Sidebar;
