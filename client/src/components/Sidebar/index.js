import React from 'react';
import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <section className="sidebar-section">
      <header className="sidebar-section-header">
        Rooms
      </header>
      <ul className="sidebar-section-list">
        <li className="sidebar-section-list-item sidebar-section-list-item-room">
          <a href="#" className="selected">
            general
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default Sidebar;
