import React from 'react';

import './home.scss';
import curriculum from './../../assets/pdf/MichaelMolinaCV.pdf';
import home from './../../assets/img/home2.jpg';

export const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='home-container bd-container bd-grid'>
          <div className='home-data'>
            <span className='home-text'>Hello, My Name is</span>
            <h1 className='home-name'>Michael Molina</h1>
            <span className='home-profession'>Web Developer & Geek</span>

            <div className='buttons'>
              <a download='' href={curriculum} className='button button-1'>
                Download CV
              </a>
              <a href='/' className='button button-2'>
                About Me
              </a>
            </div>
          </div>
          <div className='home-social'>
            <a href='#twitter' className='home-social-icon'>
              <i className='bx bxl-twitter'></i>
            </a>
            <a href='#linkedin' className='home-social-icon'>
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href='#github' className='home-social-icon'>
              <i className='bx bxl-github'></i>
            </a>
          </div>

          <div className='home-img'>
            <img src={home} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};
