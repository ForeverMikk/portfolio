import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const FooterLink = ({ icon }) => {
  return (
    <a href='#link' className='footer-link'>
      <i className={`bx ${icon}`}></i>
    </a>
  );
};
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container bd-container'>
        <h1 className='footer-title'>Michael Molina</h1>
        <p className='footer-description'>
          Frontend Developer,Gekk & hardware enthusiast always looking for new challenges about
          creating and developing web interfaces
        </p>

        <div className='footer-social'>
          <FooterLink icon='bxl-linkedin' />
          <FooterLink icon='bxl-github' />
          <FooterLink icon='bxl-twitter' />
        </div>

        <p className='footer-copy'>&#169; 2021 ForeverMik | Michael Molina</p>
      </div>
    </footer>
  );
};

FooterLink.propTypes = {
  icon: PropTypes.string.isRequired,
};
