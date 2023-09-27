import React from 'react';
import PropTypes from 'prop-types';

import work1 from './../../assets/img/work1.jpg';
import work2 from './../../assets/img/work2.jpg';
import work3 from './../../assets/img/work3.jpg';
import work4 from './../../assets/img/work4.jpg';
import work5 from './../../assets/img/work5.jpg';
import work6 from './../../assets/img/work6.jpg';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'React JS, Binahria Analytics',
    description: 'Main page of the Binahria Analytics company where they showed all their services',
    img: work1,
    github: 'https://github.com/ForeverMikk/binahria-page',
    link: 'https://stupendous-longma-93742a.netlify.app/catalogo',
  },
  {
    title: 'React JS, Tania Meza web page',
    description:
      'Website dedicated to public officials, where they share their daily lives and their future campaigns',
    img: work2,
    github: 'https://github.com/ForeverMikk/tania-meza',
    link: 'https://taniameza.mx/',
  },
  {
    title: 'React JS, Mobilesco App',
    description:
      'Application created for the administration and visualization of company furniture',
    img: work3,
    github: 'https://github.com/ForeverMikk/mobilesco',
    link: 'https://www.mobilesco.mx/',
  },
  {
    title: 'Next JS, Shooping Car Example',
    description: 'Personal project simulating a car catalog with a shopping cart',
    img: work6,
    github: 'https://github.com/ForeverMikk/nextjs-example',
  },
  {
    title: 'HTML, CSS & JavaScript, Balché Nikte',
    description: 'Balché Nikte - Website focused on skin care products',
    img: work4,
    github: 'https://github.com/ForeverMikk/balche-nikte',
    link: 'https://torpid-hot-socks.glitch.me/',
  },
  {
    title: 'React JS, Giphy API',
    description: 'Gif Expert App - an app builded to show you your favorite gifs',
    img: work5,
    github: 'https://forevermikk.github.io/gif-expert-app/',
    link: 'https://gif-expert-michael.netlify.app/',
  },
];

const PortfolioItem = ({ title, description, img, github, link }) => {
  return (
    <div className='portfolio-content'>
      <a href='#work1'>
        <img src={img} alt='' className='portfolio-img' />
      </a>
      <div className='portfolio-data flex flex-col justify-between w-full'>
        <span className='portfolio-subtitle'>{title}</span>
        <a href='#title'>
          <h2 className='portfolio-title'>{description}</h2>
        </a>

        <div className='flex justify-around'>
          <div>
            <a href={github} target='blank' className='button button-1'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <p className='text'>View on Github</p>
          </div>

          {link && (
            <div>
              <a href={link} target='blank' className='button button-1'>
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <p className='text'>View Example</p>
            </div>
          )}
        </div>
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
        {projects.map(project => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  link: PropTypes.string,
  github: PropTypes.string,
};
