import React from 'react';

import './work.scss';

export const Work = () => {
  return (
    <>
      <section className='section bd-container'>
        <div className='title-box'>
          <div className='line'> </div>
          <h2 className='section-title'>Experience & Education</h2>
        </div>

        <div className='work-contariner bd-grid'>
          <div className='work-content'>
            <h2 className='work-title'>
              <i className='bx bx-briefcase-alt work-title-icon'></i>
              Work Experience
            </h2>

            <div className='bd-grid'>
              <div className='work-data'>
                <h3 className='work-area'>Junior Frontend Developer</h3>
                <div className='work-box'>
                  <span className='work-company'>
                    <i className='bx bx-briefcase-alt work-icon'></i>
                    Balché Nikte - Full Website UI
                  </span>
                  <span className='work-company'>
                    <i className='bx bx-calendar-alt work-icon'></i>
                    Jan 2020 - Oct 2020
                  </span>
                </div>
              </div>

              <div className='work-data'>
                <h3 className='work-area'>Junior Frontend Developer</h3>
                <div className='work-box'>
                  <span className='work-company'>
                    <i className='bx bx-briefcase-alt work-icon'></i>
                    Leia MX - Hackathon App UI
                  </span>
                  <span className='work-company'>
                    <i className='bx bx-calendar-alt work-icon'></i>
                    Jan 2019 - Dic 2019
                  </span>
                </div>
              </div>

              <div className='work-data'>
                <h3 className='work-area'>Junior Frontend Developer</h3>
                <div className='work-box'>
                  <span className='work-company'>
                    <i className='bx bx-briefcase-alt work-icon'></i>
                    Balché Nikte
                  </span>
                  <span className='work-company'>
                    <i className='bx bx-calendar-alt work-icon'></i>
                    Jan 2020 - Oct 2020
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='work-content'>
            <h2 className='work-title'>
              <i className='bx bx-bookmark work-title-icon'></i>
              Education
            </h2>

            <div className='bd-grid'>
              <div className='work-data'>
                <h3 className='work-area'>Computer Enginner</h3>
                <div className='work-box'>
                  <span className='work-company'>
                    <i className='bx bx-book-alt work-icon'></i>
                    UAEH - Univercity of Hidalgo Satate
                  </span>
                  <span className='work-company'>
                    <i className='bx bx-calendar-alt work-icon'></i>
                    2015 - 2019
                  </span>
                </div>
              </div>

              <div className='work-data'>
                <h3 className='work-area'>Programming Technician</h3>
                <div className='work-box'>
                  <span className='work-company'>
                    <i className='bx bx-book-alt work-icon'></i>
                    CECyTEM
                  </span>
                  <span className='work-company'>
                    <i className='bx bx-calendar-alt work-icon'></i>
                    2012 - 2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
