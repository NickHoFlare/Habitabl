import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
      <nav className='navbar'>
        <ul className='navbar__content'>
          <li>
            <NavLink className='navbar-item' activeClassName='is-active' to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" activeClassName="is-active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" activeClassName="is-active" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
