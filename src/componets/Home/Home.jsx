import React from 'react';
import PropTypes from 'prop-types';

import './Home.scss';
import curriculumEng from './../../assets/pdf/resume.pdf';
import curriculumEsp from './../../assets/pdf/curriculum.pdf';
import home from './../../assets/img/home2.jpg';

const HomeButton = ({ link, buttonStyle, text }) => {
  return (
    <a download='' href={link} className={`button ${buttonStyle}`}>
      {text}
    </a>
  );
};

const HomeIcon = ({ link, icon }) => {
  return (
    <a href={`${link}`} target='blank' className='home-social-icon'>
      <i className={`bx ${icon}`}></i>
    </a>
  );
};

export const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='home-container bd-container bd-grid'>
          <div className='home-data'>
            <span className='home-text'>Nice to meet you</span>
            <h1 className='home-name'>
              I am <span className='home-profession'>Michael Molina</span>
            </h1>

            <div className='buttons'>
              <HomeButton link={curriculumEng} buttonStyle='button-1' text='Resume (ENG)' />
              <HomeButton link={curriculumEsp} buttonStyle='button-2' text='CV (ESP)' />
            </div>
          </div>

          <div className='home-social'>
            <HomeIcon
              link='https://www.linkedin.com/in/michael-molina-2582a9100'
              icon='bxl-linkedin'
            />
            <HomeIcon link='https://twitter.com/ForeverMikk/' icon='bxl-twitter' />
            <HomeIcon link='https://github.com/ForeverMikk' icon='bxl-github' />
          </div>

          <div className='home-img'>
            <img src={home} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

HomeIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

HomeButton.propTypes = {
  link: PropTypes.any.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
