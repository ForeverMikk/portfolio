import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const FooterLink = ({ icon, link }) => {
  return (
    <a href={`${link}`} target='blank' className='footer-link'>
      <i className={`bx ${icon}`}></i>
    </a>
  );
};
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container bd-container'>
        <h1 className='footer-title'>Michael Molina</h1>
        <p className='footer-description'>Frontend Developer,Gekk & hardware enthusiast</p>

        <div className='footer-social'>
          <FooterLink
            icon='bxl-linkedin'
            link='https://www.linkedin.com/in/michael-molina-2582a9100'
          />
          <FooterLink icon='bxl-github' link='https://github.com/ForeverMikk' />
          <FooterLink icon='bxl-twitter' link='https://twitter.com/ForeverMikk/' />
        </div>

        <p className='footer-copy'>&#169; 2021 ForeverMik | Michael Molina</p>
      </div>
    </footer>
  );
};

FooterLink.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
