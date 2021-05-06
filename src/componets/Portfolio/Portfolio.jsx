import React from 'react';

import work1 from './../../assets/img/work1.jpg';
import work2 from './../../assets/img/work2.jpg';
import work3 from './../../assets/img/work3.jpg';
import work4 from './../../assets/img/work4.jpg';
import work5 from './../../assets/img/work5.jpg';
import work6 from './../../assets/img/work6.jpg';
import './portfolio.scss';

export const Portfolio = () => {
  return (
    <section className='portfolio section bd-container' id='portfolio'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Portfolio</h2>
      </div>
      <span className='section-subtitle'>My Recent Work</span>

      <div className='portfolio__container bd-grid'>
        {/* First Project */}
        <div className='portfolio__content'>
          <a href='#work1'>
            <img src={work1} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>
        {/* 2nd Project */}
        <div className='portfolio__content'>
          <a href='#work2'>
            <img src={work2} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>

        {/* 3th Project */}
        <div className='portfolio__content'>
          <a href='#work3'>
            <img src={work3} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>
        {/* 4th Project */}
        <div className='portfolio__content'>
          <a href='#work4'>
            <img src={work4} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>
        {/* 5th Project */}
        <div className='portfolio__content'>
          <a href='#work5'>
            <img src={work5} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>
        {/* 6th Project */}
        <div className='portfolio__content'>
          <a href='#work6'>
            <img src={work6} alt='' className='portfolio__img' />
          </a>
          <div className='portfolio-data'>
            <span className='portfolio-suntitle'>Web Development</span>
            <a href='#title'>
              <h2 className='portfolio-title'>New Portfolio of work donde for a client</h2>
            </a>
            <a href='#button' className='button'>
              View Details
            </a>
          </div>
        </div>
      </div>

      {/* Mixup Filter for Proyects*/}
    </section>
  );
};
