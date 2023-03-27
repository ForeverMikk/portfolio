import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './navbar.scss';

export const scrollItem = itemId => {
  document.querySelector(`#${itemId}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
};

const NavItem = ({ title, itemId }) => {
  return (
    <li className='nav-item'>
      <a href={`#${itemId}`} className='nav-link' onClick={() => scrollItem(itemId)}>
        {title}
      </a>
    </li>
  );
};

export const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <header className='header l-header' id='header'>
      <nav className='nav bd-container'>
        <a href='#home' className='nav-logo' onClick={() => scrollItem('header')}>
          michael molina
        </a>

        <div className={`nav-menu ${hideNavbar ? 'hide' : ''}`} id='nav-menu'>
          <ul className='nav-list'>
            <NavItem title='About me' itemId='about' />
            <NavItem title='My work' itemId='work' />
            <NavItem title='Portfolio' itemId='portfolio' />
            <NavItem title='Services' itemId='services' />
            <NavItem title='Contact me' itemId='contact' />
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
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
