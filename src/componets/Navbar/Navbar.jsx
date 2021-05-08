// import React, { Fragment } from 'react'; //Esto es en caso de Esribir la etiqueta Fragment
// No es necesario puedes hacerlo con los puros signos sin abrir nada
import React, { useState } from 'react';

import logo from './../../assets/img/logo.png';
// import github from './../../assets/img/github.png';
// import twitter from '../../assets/img/twitter.png';

import './navbar.scss';

export const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <>
      <header className='header l-header' id='header'>
        <nav className='nav bd-container'>
          <a href='#home' className='nav-logo'>
            <img src={logo} alt='' />
          </a>

          <div className={`nav-menu ${hideNavbar ? 'hide' : ''}`} id='nav-menu'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a href='#about' className='nav-link'>
                  About me
                </a>
              </li>
              <li className='nav-item'>
                <a href='#portfolio' className='nav-link'>
                  My work
                </a>
              </li>
              <li className='nav-item'>
                <a href='#services' className='nav-link'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                  Contact me
                </a>
              </li>
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
