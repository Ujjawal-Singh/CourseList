// src/components/Sidebar.js

import { Link } from 'react-router-dom';
import './sidebar.css'; // Make sure to create this CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="company-name">Company Name</h1>
      <ul className="nav-list">
        <li>
          <Link to="/">Student Dashboard</Link>
        </li>
        <li>
          <Link to="/courselist">Course List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
