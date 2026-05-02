import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__name">Michael Molina</h3>
            <p className="footer__tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/michael-molina-2582a9100"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/ForeverMikk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/ForeverMikk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="mailto:michaelmolina679@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Michael Molina. {t.footer.rights}
          </p>
          <p className="footer__built">
            {t.footer.made} <span className="footer__heart">❤️</span> {t.footer.using}
          </p>
        </div>
      </div>
    </footer>
  );
};
