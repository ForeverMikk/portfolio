import React from 'react';

import './home.scss';
import curriculum from './../../assets/pdf/MichaelMolinaCV.pdf';

export const Home = () => {
    return (
        <>
        <a href="#" className="scrolltop" id="scroll-top">
            <i className="bx bx-chevron-up scrolltop-icon">
                
            </i>
        </a>
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-data">
                    <span className="intro-text">Hello, My Name is</span>
                    <h1 className="intro-name">Michael Molina</h1>
                    <span className="intro-text">Web Developer & Geek</span>
                    <div className="buttons">
                        <a download="" href={curriculum} className="button button-1">Download CV</a>
                        <a href="" className="button button-2">About Me</a>
                    </div>
                </div>
            </div>
            <svg className="hero-design" xmlns="http://www.w3.org/2000/svg" width="600" height="594" viewBox="0 0 600 594">
                <g id="Prismas" transform="translate(-867 -363)">
                    <rect id="Rectángulo_17" data-name="Rectángulo 17" width="150" height="150" rx="20" transform="translate(1165 363)" fill="#ec1a21"/>
                    <rect id="Rectángulo_26" data-name="Rectángulo 26" width="150" height="150" rx="64" transform="translate(1017 657)" fill="#fcff1c"/>
                    <rect id="Rectángulo_19" data-name="Rectángulo 19" width="150" height="150" rx="20" transform="translate(1317 513)" fill="#fcff1c"/>
                    <rect id="Rectángulo_20" data-name="Rectángulo 20" width="150" height="150" rx="20" transform="translate(1017 507)" fill="#0d24e0"/>
                    <rect id="Rectángulo_21" data-name="Rectángulo 21" width="150" height="150" rx="20" transform="translate(1019 807)" fill="#0d24e0"/>
                    <rect id="Rectángulo_22" data-name="Rectángulo 22" width="150" height="150" rx="20" transform="translate(1167 662)" fill="#ec1a21"/>
                    <rect id="Rectángulo_23" data-name="Rectángulo 23" width="150" height="150" rx="20" transform="translate(867 657)" fill="#ec1a21"/>
                    <rect id="Rectángulo_64" data-name="Rectángulo 64" width="150" height="150" rx="64" transform="translate(1167 513)" fill="#fff"/>
                </g>
            </svg>
        </section>
        </>
    )
}
