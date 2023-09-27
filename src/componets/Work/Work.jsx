import React from 'react';
import PropTypes from 'prop-types';

import './work.scss';

const experience = [
  {
    title: 'Next Frontend Developer (CDMX)',
    project: 'PITE IT Consulting ',
    date: 'Jul 2023 - Present',
    icon: 'bx-briefcase-alt',
  },
  {
    title: 'React Frontend Developer (Hidalgo)',
    project: 'Binahria Analitycs',
    date: 'Jun 2022 - Jun 2023',
    icon: 'bx-briefcase-alt',
  },
  {
    title: 'React Frontend Developer (Hidalgo)',
    project: 'Mobilesco Pachuca',
    date: 'Jul 2021 - Feb 2022',
    icon: 'bx-briefcase-alt',
  },
  {
    title: 'React Frontend Developer (Spain)',
    project: 'Partake / Flimbo',
    date: 'Nov 2020 - Jun 2021',
    icon: 'bx-briefcase-alt',
  },
];

const education = [
  {
    title: 'Computer Enginner',
    project: 'UAEH - Univercity of Hidalgo Satate',
    date: '2015 - 2019',
    icon: 'bx-book-alt',
  },
  {
    title: 'Programming Technician',
    project: 'CECyTEM',
    date: '2012 - 2015',
    icon: 'bx-book-alt',
  },
];

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
            {experience.map(company => (
              <WorkQualification
                key={company.title}
                title={company.title}
                project={company.project}
                date={company.date}
                icon={company.icon}
              />
            ))}
          </div>
        </div>

        <div className='work-content'>
          <h2 className='work-title'>
            <i className='bx bx-bookmark work-title-icon'></i>
            Education
          </h2>

          <div className='bd-grid'>
            {education.map(school => (
              <WorkQualification
                key={school.title}
                title={school.title}
                project={school.project}
                date={school.date}
                icon={school.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

WorkQualification.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
