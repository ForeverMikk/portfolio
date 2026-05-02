import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './navbar.scss';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const easterEggClicksRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleEasterEgg = () => {
    easterEggClicksRef.current += 1;
    if (easterEggClicksRef.current >= 5) {
      scrollToSection('easter-egg');
      easterEggClicksRef.current = 0;
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => scrollToSection('home')}>
          <span className="navbar__logo-text">Michael Molina</span>
        </div>

        <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="navbar__item">
              <a
                href={`#${item.id}`}
                className="navbar__link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__controls">
          <button
            className="navbar__control-btn"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className="navbar__control-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Cyberpunk Mode' : 'Dark Mode'}
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faGamepad : faMoon} />
          </button>
          <button
            className="navbar__control-btn navbar__easter-egg"
            onClick={handleEasterEgg}
            aria-label="Easter egg"
            title="👀"
          >
            🎮
          </button>
        </div>

        <button
          className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
