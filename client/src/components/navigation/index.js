import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import API from '../../utils/API.js';
import {
  ROUTE_LOGIN,
  ROUTE_STUDENT,
  ROUTE_DASHBOARD,
  ICON_MENU,
  COLOR_PRIMARY,
} from '../../constants/index.js';
import { nav } from '../../translations';
import Icon from '../../utils/Icon.js';

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isConnect = API.isAuth() === true;

  return (
    <div className="nav-container">
      <Link className="nav-title" to="/">
        {nav.title}
      </Link>
      {isConnect && (
        <nav className="nav-list">
          <div
            className={`fa fa-bars ${isExpanded && 'active'}`}
            aria-hidden="true"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon icon={ICON_MENU} size={50} color={COLOR_PRIMARY} />
          </div>

          <ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
            <NavLink activeClassName="active" to={ROUTE_DASHBOARD}>
              <li>{nav.home}</li>
            </NavLink>
            <NavLink activeClassName="active" to={ROUTE_LOGIN}>
              <li>{nav.test}</li>
            </NavLink>
            <NavLink activeClassName="active" to="/signup">
              <li>{nav.session}</li>
            </NavLink>
            <NavLink activeClassName="active" to={ROUTE_STUDENT}>
              <li>{nav.student}</li>
            </NavLink>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
