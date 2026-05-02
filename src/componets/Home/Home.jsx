import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './home.scss';
import homeImg from '../../assets/img/home2.jpg';

const CV_PATH = '/CV_Michael_Frontend.pdf';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className={`home ${isVisible ? 'home--visible' : ''}`}>
      <div className="home__container">
        <div className="home__content">
          <div className="home__greeting">{t.home.greeting}</div>
          <h1 className="home__name">
            <span className="home__name-first">Michael</span>
            <span className="home__name-last">Molina</span>
          </h1>
          <h2 className="home__title">
            {t.home.title} <span className="gradient-text">{t.home.titleHighlight}</span> {t.home.subtitle}
          </h2>
          <p className="home__description">
            {t.home.description}
          </p>
          
          <div className="home__actions">
            <a
              href={CV_PATH}
              download="CV_Michael_Frontend.pdf"
              className="btn btn--primary"
            >
              <FontAwesomeIcon icon={faDownload} />
              {t.home.downloadCV}
            </a>
            <button 
              className="btn btn--secondary"
              onClick={() => scrollToSection('projects')}
            >
              {t.home.viewProjects}
            </button>
          </div>

          <div className="home__social">
            <a 
              href="https://www.linkedin.com/in/michael-molina-2582a9100" 
              target="_blank" 
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/ForeverMikk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://twitter.com/ForeverMikk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="home__social-link"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="mailto:michaelmolina679@gmail.com"
              className="home__social-link"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="home__image-wrapper">
          <div className="home__image-bg"></div>
          <img 
            src={homeImg} 
            alt="Michael Molina" 
            className="home__image"
          />
        </div>
      </div>

      <div className="home__scroll-indicator">
        <div className="home__scroll-mouse">
          <div className="home__scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};
