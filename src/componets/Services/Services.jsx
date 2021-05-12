import React from 'react';
import PropTypes from 'prop-types';

import './services.scss';

const ServiceContainer = ({ title, description, icon }) => {
  return (
    <div className='services-data'>
      <i className={`bx ${icon} services-icon`}></i>
      <h3 className='services-title'>{title}</h3>
      <p className='services-description'>{description}</p>
      <a href='#button' className='button button-1'>
        Know More
      </a>
    </div>
  );
};

export const Services = () => {
  return (
    <section className='services section bd-container' id='services'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Services</h2>
      </div>
      <span className='section-subtitle'>Beyond my Work</span>

      <div className='services-container bd-grid'>
        <ServiceContainer
          title='Web Development'
          description='Complete website development, from a simple landing page to a complete experience for your business'
          icon='bx-desktop'
        />

        <ServiceContainer
          title='PC Support'
          description='If you want to build your own Gaming PC this is the right place. Let me know if you need a hand'
          icon='bx-microchip'
        />
        <ServiceContainer
          title='UX/UI Design'
          description='I Build beautifull interfaces for every kind of business, with a great user experience'
          icon='bx-palette'
        />
      </div>
    </section>
  );
};

ServiceContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
