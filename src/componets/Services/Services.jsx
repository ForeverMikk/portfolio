import React from 'react';

import './services.scss';
export const Services = () => {
  return (
    <section className='section bd-container' id='services'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Services</h2>
      </div>
      <span className='section-subtitle'>Betond my Work</span>

      <div className='services-container bd-grid'>
        <div className='services-data'>
          <i className='bx bx-palette services-icon'></i>
          <h3 className='services-title'>UX/UI Design</h3>
          <p className='services-description'>
            I Build beautifull interfaces for every kind of business, with a great user experience
          </p>
          <a href='#button' className='button'>
            Know More
          </a>
        </div>
      </div>

      <div className='services-container bd-grid'>
        <div className='services-data'>
          <i className='bx bx-laptop services-icon'></i>
          <h3 className='services-title'>UX/UI Design</h3>
          <p className='services-description'>
            I Build beautifull interfaces for every kind of business, with a great user experience
          </p>
          <a href='#button' className='button'>
            Know More
          </a>
        </div>
      </div>

      <div className='services-container bd-grid'>
        <div className='services-data'>
          <i className='bx bx-palette services-icon'></i>
          <h3 className='services-title'>UX/UI Design</h3>
          <p className='services-description'>
            I Build beautifull interfaces for every kind of business, with a great user experience
          </p>
          <a href='#button' className='button'>
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};
