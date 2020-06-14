import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import API from '../../utils/API.js';
// import { translations } from '../translations';

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isConnect = API.isAuth() === true;

  return (
    <div className="nav-container">
      <Link className="nav-title" to="/">
        ALPHA
      </Link>
      {isConnect && (
        <nav className="nav-list">
          <div
            className={`fa fa-bars ${isExpanded && 'active'}`}
            aria-hidden="true"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            menu
          </div>

          <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
            <NavLink activeClassName="active" to="/test">
              <li>salut</li>
            </NavLink>
            <NavLink activeClassName="active" to="/signin">
              <li>Session de code</li>
            </NavLink>
            <NavLink activeClassName="active" to="/signup">
              <li>Test</li>
            </NavLink>
            <NavLink activeClassName="active" to="/dashboard">
              <li>Elèves</li>
            </NavLink>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
