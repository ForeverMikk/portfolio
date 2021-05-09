import React from 'react';
import PropTypes from 'prop-types';

import './work.scss';

const WorkQualification = ({ title, project, date, icon }) => {
  return (
    <div className='work-data'>
      <h3 className='work-area'>{title}</h3>
      <div className='work-box'>
        <span className='work-company'>
          <i className={`bx ${icon} work-icon`}></i>
          {project}
        </span>

        <span className='work-company'>
          <i className='bx bx-calendar-alt work-icon'></i>
          {date}
        </span>
      </div>
    </div>
  );
};

export const Work = () => {
  return (
    <section className='work section bd-container' id='work'>
      <div className='title-box'>
        <div className='line'> </div>
        <h2 className='section-title'>Experience & Education</h2>
      </div>
      <span className='section-subtitle'>Qualifications</span>

      <div className='work-container bd-grid'>
        <div className='work-content'>
          <h2 className='work-title'>
            <i className='bx bx-briefcase-alt work-title-icon'></i>
            Work Experience
          </h2>

          <div className='bd-grid'>
            <WorkQualification
              title='Jr. Frontend Developer'
              project='Balché Nikté - Full Website UI'
              date='Jan 2020 - Oct 2020'
              icon='bx-briefcase-alt'
            />

            <WorkQualification
              title='Jr. Fullstack Developer'
              project=' Leia MX - Hackathon App UI'
              date='Jan 2019 - Dic 2019'
              icon='bx-briefcase-alt'
            />
          </div>
        </div>

        <div className='work-content'>
          <h2 className='work-title'>
            <i className='bx bx-bookmark work-title-icon'></i>
            Education
          </h2>

          <div className='bd-grid'>
            <WorkQualification
              title='Computer Enginner'
              project='UAEH - Univercity of Hidalgo Satate'
              date='2015 - 2019'
              icon='bx-book-alt'
            />
            <WorkQualification
              title='Programming Technician'
              project='CECyTEM'
              date='2012 - 2015'
              icon='bx-book-alt'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WorkQualification.propTypes = {
  title: PropTypes.string.isRequired,
};
WorkQualification.propTypes = {
  project: PropTypes.string.isRequired,
};
WorkQualification.propTypes = {
  date: PropTypes.string.isRequired,
};
WorkQualification.propTypes = {
  icon: PropTypes.string.isRequired,
};
