import React from 'react';
import PropTypes from 'prop-types';

import './contact.scss';

const ContactBox = ({ title, description, icon }) => {
  return (
    <div className='contact-box flex flex-col justify-center items-center'>
      <i className={`bx ${icon} contact-icon`}> </i>
      <h3 className='contact-title'>{title}</h3>
      <span className='contact-description'>{description}</span>
    </div>
  );
};

const ContactSocial = ({ icon }) => {
  return (
    <a href='#social' className='contact-social'>
      <i className={`bx ${icon}`}></i>
    </a>
  );
};

export const Contact = () => {
  return (
    <section className='contact section bd-container' id='contact'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Contact me</h2>
      </div>

      <span className='section-subtitle'>Send me a Message</span>

      <div className='contact-container bd-grid'>
        <div className='contact-content bd-grid'>
          <ContactBox title='Location' description='Zumpango, México' icon='bx-home' />
          <ContactBox title='Phone' description='+52 771 414 1066' icon='bx-phone' />
          <ContactBox title='Email' description='michaelmolins679@gmail.com' icon='bx-envelope' />

          <div className='contact-box'>
            <i className='bx bx-chat contact-icon'> </i>
            <h3 className='contact-title'>Chat</h3>
            <div>
              <ContactSocial icon='bxl-whatsapp' />
              <ContactSocial icon='bxl-telegram' />
              <ContactSocial icon='bxl-twitter' />
            </div>
          </div>
        </div>

        {/* <form action='' className='contact-form'>
          <div className='contact-inputs'>
            <input type='text' placeholder='Name' className='contact-input' />
            <input type='email' placeholder='Emial' className='contact-input' />
          </div>
          <div className='contact-inputs'>
            <input type='text' placeholder='Subject' className='contact-input' />
            <input type='number' placeholder='Number' className='contact-input' />
          </div>
          <textarea
            name=''
            id=''
            cols='0'
            rows='7'
            placeholder='Message'
            className='contact-input'
          ></textarea>
          <input type='submit' value='Send Message' className='button button-1 contact-button' />
        </form> */}
      </div>
    </section>
  );
};

ContactBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

ContactSocial.propTypes = {
  icon: PropTypes.string.isRequired,
};
