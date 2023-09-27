import React from 'react';
import PropTypes from 'prop-types';

import './about.scss';
import about_img from './../../assets/img/about-img.jpg';

const Achievement = ({ number, achiev }) => {
  return (
    <div className='achievement'>
      <div className='about-number'>{number}</div>
      <div className='about-achievement'>{achiev}</div>
    </div>
  );
};
export const About = () => {
  return (
    <section className='about section bd-container' id='about'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>About me</h2>
      </div>
      <span className='section-subtitle'>My History</span>

      <div className='about-container bd-grid'>
        <div className='about-data bd-grid'>
          <p className='about-description'>
            <span>Hello, I am</span>
            <br />
            Web developer specialized in creating websites and web applications using{' '}
            <strong className='strong-text'>ReactJS (or NextJS)</strong> in combination with
            Tailwind CSS. Also venturing into UX/UI interface design
          </p>
          <Achievement number={26} achiev='Age' />
          <Achievement number={3} achiev='Years of Experience' />
          <Achievement number='+10' achiev='Finished Projects' />
        </div>

        <img src={about_img} alt='' className='about-img' />
      </div>
    </section>
  );
};

Achievement.propTypes = {
  number: PropTypes.number.isRequired,
  achiev: PropTypes.string.isRequired,
};
