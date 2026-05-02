import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faTools, faServer } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './skills.scss';

const techSkills = {
  frontend: [
    { name: 'React (Hooks, Context)', icon: '⚛️', category: 'frontend' },
    { name: 'Next.js (SSR, API Routes)', icon: '▲', category: 'frontend' },
    { name: 'TypeScript', icon: '🔷', category: 'frontend' },
    { name: 'JavaScript (ES6+)', icon: '🟨', category: 'frontend' },
    { name: 'Angular 16', icon: '🅰️', category: 'frontend' },
    { name: 'HTML5 / CSS3', icon: '🌐', category: 'frontend' },
  ],
  styles: [
    { name: 'Tailwind CSS', icon: '💨', category: 'styles' },
    { name: 'Material UI', icon: '🎭', category: 'styles' },
    { name: 'Mobile-first', icon: '📱', category: 'styles' },
    { name: 'Figma', icon: '🎨', category: 'styles' },
  ],
  tools: [
    { name: 'Netlify', icon: '◆', category: 'tools' },
    { name: 'Openpay', icon: '💳', category: 'tools' },
    { name: 'Infobit', icon: '📈', category: 'tools' },
    { name: 'Storybook', icon: '📚', category: 'tools' },
    { name: 'Zod', icon: '✅', category: 'tools' },
    { name: 'Chart.js', icon: '📊', category: 'tools' },
    { name: 'Git/GitHub', icon: '🔀', category: 'tools' },
  ],
  complementary: [
    { name: 'Node.js', icon: '🟢', category: 'complementary' },
    { name: 'WordPress (Headless)', icon: '📝', category: 'complementary' },
    { name: 'Ionic', icon: '📲', category: 'complementary' },
    { name: 'REST APIs', icon: '🔗', category: 'complementary' },
  ],
};

const softSkills = {
  es: [
    'SCRUM',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Proactividad',
    'Adaptabilidad',
    'Orientación a resultados',
  ],
  en: [
    'SCRUM',
    'Teamwork',
    'Effective communication',
    'Proactivity',
    'Adaptability',
    'Results-oriented',
  ],
};

export const Skills = () => {
  const { t, language } = useLanguage();
  const currentSoftSkills = softSkills[language];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills__content">
          <div className="skills__tech">
            <div className="skills__category">
              <div className="skills__category-header">
                <FontAwesomeIcon icon={faCode} className="skills__category-icon" />
                <h3 className="skills__category-title">{t.skills.tech}</h3>
              </div>
              <div className="skills__grid">
                {techSkills.frontend.map((skill) => (
                  <div key={skill.name} className="skill-card skill-card--primary">
                    <span className="skill-card__icon">{skill.icon}</span>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills__category">
              <div className="skills__category-header">
                <FontAwesomeIcon icon={faPalette} className="skills__category-icon" />
                <h3 className="skills__category-title">
                  {language === 'es' ? 'Estilos & Diseño' : 'Styles & Design'}
                </h3>
              </div>
              <div className="skills__grid">
                {techSkills.styles.map((skill) => (
                  <div key={skill.name} className="skill-card skill-card--accent">
                    <span className="skill-card__icon">{skill.icon}</span>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills__category">
              <div className="skills__category-header">
                <FontAwesomeIcon icon={faTools} className="skills__category-icon" />
                <h3 className="skills__category-title">
                  {language === 'es' ? 'Librerías/Herramientas' : 'Libraries/Tools'}
                </h3>
              </div>
              <div className="skills__grid">
                {techSkills.tools.map((skill) => (
                  <div key={skill.name} className="skill-card skill-card--secondary">
                    <span className="skill-card__icon">{skill.icon}</span>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills__category">
              <div className="skills__category-header">
                <FontAwesomeIcon icon={faServer} className="skills__category-icon" />
                <h3 className="skills__category-title">
                  {language === 'es' ? 'Conocimientos Complementarios' : 'Complementary Skills'}
                </h3>
              </div>
              <div className="skills__grid">
                {techSkills.complementary.map((skill) => (
                  <div key={skill.name} className="skill-card skill-card--complementary">
                    <span className="skill-card__icon">{skill.icon}</span>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills__soft">
            <h3 className="skills__subtitle">{t.skills.soft}</h3>
            <div className="skills__tags">
              {currentSoftSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
