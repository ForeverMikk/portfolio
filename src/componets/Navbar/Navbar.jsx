import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from './../../assets/img/logo.png';

import './navbar.scss';

const NavItem = ({ title }) => {
  return (
    <li className='nav-item'>
      <a href='#about' className='nav-link'>
        {title}
      </a>
    </li>
  );
};

export const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <>
      <header className='header l-header' id='header'>
        <nav className='nav bd-container'>
          <a href='#home' className='nav-logo'>
            <img src={logo} alt='' className='nav-img' />
          </a>

          <div className={`nav-menu ${hideNavbar ? 'hide' : ''}`} id='nav-menu'>
            <ul className='nav-list'>
              <NavItem title='About me' />
              <NavItem title='My work' />
              <NavItem title='Portfolio' />
              <NavItem title='Services' />
              <NavItem title='Contact me' />
            </ul>
          </div>

          <button
            id='toggle'
            className='nav-toggle'
            onClick={() => {
              setHideNavbar(!hideNavbar);
            }}
          >
            <i className='bx bx-menu'></i>
          </button>
        </nav>
      </header>
    </>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};
