import React from 'react';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container bd-container'>
        <h1 className='footer_title'>Michael Molina</h1>
        <p className='footer_description'>
          Frontend Developer,Gekk & hardware enthusiast always looking for new challenges about
          creating and developing web interfaces
        </p>
        <div className='footer_social'>
          <a href='#link' className='footer_link'>
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='#link' className='footer_link'>
            <i className='bx bxl-github'></i>
          </a>
          <a href='#link' className='footer_link'>
            <i className='bx bxl-twitter'></i>
          </a>
        </div>
        <p className='footer_copy'>&#169; 2021 ForeverMik | Michael Molina</p>
      </div>
    </footer>
  );
};
