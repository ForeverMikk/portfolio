import React from 'react';

import './home.scss';
import curriculumEng from './../../assets/pdf/resume.pdf';
import curriculumEsp from './../../assets/pdf/curriculum.pdf';
import home from './../../assets/img/home2.jpg';
// import { scrollItem } from '../Navbar/Navbar';

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
              <a download='' href={curriculumEng} className='button button-1'>
                Resume (ENG)
              </a>

              <a download='' href={curriculumEsp} className='button button-2'>
                CV (ESP)
              </a>
            </div>
          </div>
          <div className='home-social'>
            <a href='https://twitter.com/ForeverMikk/' target='blank' className='home-social-icon'>
              <i className='bx bxl-twitter'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/michael-molina-2582a9100'
              target='blank'
              className='home-social-icon'
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href='https://github.com/ForeverMikk' target='blank' className='home-social-icon'>
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
