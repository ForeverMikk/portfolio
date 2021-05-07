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
            <i className='bx bx-chat contact_icon'> </i>
            <h3 className='contact_title'>Chat</h3>
            <div>
              <a href='#social' className='contact_social'>
                <i className='bx bxl-whatsapp-square'></i>
              </a>
              <a href='#social' className='contact_social'>
                <i className='bx bxl-telegram'></i>
              </a>
              <a href='#social' className='contact_social'>
                <i className='bx bxl-twitter'></i>
              </a>
            </div>
          </div>
        </div>

        <form action='' className='contact_form'>
          <div className='contact_inputs'>
            <input type='text' placeholder='Name' className='contact_input' />
            <input type='email' placeholder='Emial' className='contact_input' />
          </div>
          <div className='contact_inputs'>
            <input type='text' placeholder='Subject' className='contact_input' />
            <input type='number' placeholder='Number' className='contact_input' />
          </div>
          <textarea
            name=''
            id=''
            cols='0'
            rows='7'
            placeholder='Message'
            className='contact_input'
          ></textarea>
          <input type='submit' value='Send Message' className='button contact_button' />
        </form>
      </div>
    </section>
  );
};
