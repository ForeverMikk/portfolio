import React from 'react';
import PropTypes from 'prop-types';

import work1 from './../../assets/img/work1.jpg';
import work2 from './../../assets/img/work2.jpg';
import work3 from './../../assets/img/work3.jpg';
import work4 from './../../assets/img/work4.jpg';
// import work5 from './../../assets/img/work5.jpg';
// import work6 from './../../assets/img/work6.jpg';
import './portfolio.scss';

const PortfolioItem = ({ title, description, img, link }) => {
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
        <a href={`${link}`} target='blank' className='button button-1'>
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
          title='React JS, Giphy API'
          description='Gif Expert App - an app builded to show you your favorite gifs'
          img={work1}
          link='https://forevermikk.github.io/gif-expert-app/'
        />
        <PortfolioItem
          title='HTML, CSS & JavaScript'
          description='Balché Nikte - Website focused on skin care products'
          img={work2}
          link='https://torpid-hot-socks.glitch.me/'
        />
        <PortfolioItem
          title='HTML, CSS & JavaScript'
          description='Hackathon App -  tool for the creation and management of hackathons'
          img={work4}
          link='https://github.com/ForeverMikk/hackathon-front'
        />
        <PortfolioItem
          title='Ionic, Laravel'
          description='Tlali - Miltiplatform app  for the monitoring and maintenance of a bio-intensive orchard'
          img={work3}
          link='https://github.com/ForeverMikk/tlali-v4'
        />
      </div>
    </section>
  );
};

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
};
