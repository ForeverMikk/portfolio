import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './contact.scss';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la integración con EmailJS
    // Por ahora solo simulación
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">06.</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__subtitle">{t.contact.subtitle}</h3>
            <p className="contact__description">
              {t.contact.description}
            </p>

            <div className="contact__details">
              <a href="mailto:michaelmolina679@gmail.com" className="contact__detail">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>michaelmolina679@gmail.com</span>
              </a>
              <a href="tel:+527714141066" className="contact__detail">
                <FontAwesomeIcon icon={faPhone} />
                <span>(+52) 771 414 1066</span>
              </a>
              <div className="contact__detail">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{language === 'es' ? 'Estado de México, México' : 'State of Mexico, Mexico'}</span>
              </div>
            </div>

            <div className="contact__social">
              <a
                href="https://www.linkedin.com/in/michael-molina-2582a9100"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ForeverMikk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://twitter.com/ForeverMikk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              {t.contact.send}
            </button>

            {status === 'success' && (
              <div className="contact__status contact__status--success">
                {t.contact.success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
