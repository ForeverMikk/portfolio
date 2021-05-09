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
            Frontend Developer, Gekk & Hardware enthusiast always looking for new challenges about
            creating and developing my abilities as a <strong>Web Developer</strong> and Person
          </p>
          <Achievement number={25} achiev='Age' />
          <Achievement number={2} achiev='Years of Experience' />
          <Achievement number={5} achiev='Finished Projects' />
        </div>

        <img src={about_img} alt='' className='about-img' />
      </div>
    </section>
  );
};

Achievement.propTypes = {
  number: PropTypes.number.isRequired,
};

Achievement.propTypes = {
  achiev: PropTypes.string.isRequired,
};
