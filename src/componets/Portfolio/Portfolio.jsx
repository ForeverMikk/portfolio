import React from 'react';
import PropTypes from 'prop-types';

import work1 from './../../assets/img/work1.jpg';
import work2 from './../../assets/img/work2.jpg';
import work3 from './../../assets/img/work3.jpg';
import work4 from './../../assets/img/work4.jpg';
// import work5 from './../../assets/img/work5.jpg';
// import work6 from './../../assets/img/work6.jpg';
import './portfolio.scss';

const PortfolioItem = ({ title, description, img }) => {
  return (
    <div className='portfolio-content'>
      <a href='#work1'>
        <img src={img} alt='' className='portfolio-img' />
      </a>
      <div className='portfolio-data'>
        <span className='portfolio-subtitle'>{title}</span>
        <a href='#title'>
          <h2 className='portfolio-title'>{description}</h2>
        </a>
        <a href='#button' className='button button-1'>
          View Details
        </a>
      </div>
    </div>
  );
};
export const Portfolio = () => {
  return (
    <section className='portfolio section bd-container' id='portfolio'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Portfolio</h2>
      </div>
      <span className='section-subtitle'>My Recent Work</span>

      <div className='portfolio-container bd-grid'>
        <PortfolioItem
          title='Web Development'
          description='New Portfolio of work donde for a client'
          img={work1}
        />
        <PortfolioItem
          title='Web Development'
          description='New Portfolio of work donde for a client'
          img={work2}
        />
        <PortfolioItem
          title='Web Development'
          description='New Portfolio of work donde for a client'
          img={work3}
        />
        <PortfolioItem
          title='Web Development'
          description='New Portfolio of work donde for a client'
          img={work4}
        />
      </div>
    </section>
  );
};

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
};
PortfolioItem.propTypes = {
  description: PropTypes.string.isRequired,
};
PortfolioItem.propTypes = {
  img: PropTypes.any.isRequired,
};
