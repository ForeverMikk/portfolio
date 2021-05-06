import React from 'react';

import './contact.scss';

export const Contact = () => {
  return (
    <section className='contact section bd-container' id='portfolio'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Contact me</h2>
      </div>
      <span className='section-subtitle'>Send me a Message</span>
      <div className='contact_container bd-grid'>
        <div className='contact_content bd.grid'>
          <div className='contact_box'>
            <i className='bx bx-home contact_icon'> </i>
            <h3 className='contact_title'>Location</h3>
            <span className='contact_description'>Zumpango, México</span>
          </div>

          <div className='contact_box'>
            <i className='bx bx-phone contact_icon'> </i>
            <h3 className='contact_title'>Phone</h3>
            <span className='contact_description'>+52 771 414 1066</span>
          </div>

          <div className='contact_box'>
            <i className='bx bx-envelope contact_icon'> </i>
            <h3 className='contact_title'>Email</h3>
            <span className='contact_description'>michaelmolina679@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
