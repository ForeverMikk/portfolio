import './education.scss';
import { useLanguage } from '../../context/LanguageContext';

const education = {
  es: [
    {
      degree: 'Ingeniería en Computación',
      institution: 'UAEH - Universidad Autónoma del Estado de Hidalgo',
      period: 'Ago 2016 - Oct 2019',
      description: 'Tesis: "Tlali, la forma de cultivar en tu casa"',
    },
    {
      degree: 'Técnico en Programación',
      institution: 'CECyTEM',
      period: 'Mayo 2014 - Mayo 2016',
      description: '',
    },
  ],
  en: [
    {
      degree: 'B.S. in Computer Engineering',
      institution: 'UAEH - University of the State of Hidalgo',
      period: 'Aug 2016 - Oct 2019',
      description: 'Thesis: "Tlali, the way to grow food at home."',
    },
    {
      degree: 'Programming Technician',
      institution: 'CECyTEM',
      period: 'May 2014 - May 2016',
      description: '',
    },
  ],
};

const languages = {
  es: [
    { name: 'Español', level: 'Nativo' },
    {
      name: 'Inglés',
      level:
        'B2 (Intermedio Alto — conversaciones técnicas y consumo de documentación)',
    },
  ],
  en: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'B2 (Upper Intermediate - Professional working proficiency)' },
  ],
};

export const Education = () => {
  const { t, language } = useLanguage();
  const currentEducation = education[language];
  const currentLanguages = languages[language];

  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">{t.education.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="education__content">
          <div className="education__degrees">
            <h3 className="education__subtitle">{t.education.academic}</h3>
            {currentEducation.map((edu, idx) => (
              <div key={idx} className="education__item">
                <div className="education__header">
                  <h4 className="education__degree">{edu.degree}</h4>
                  <span className="education__period">{edu.period}</span>
                </div>
                <div className="education__institution">{edu.institution}</div>
                {edu.description && <p className="education__description">{edu.description}</p>}
              </div>
            ))}
          </div>

          <div className="education__languages">
            <h3 className="education__subtitle">{t.education.languages}</h3>
            <div className="education__lang-list">
              {currentLanguages.map((lang, idx) => (
                <div key={idx} className="lang-card">
                  <div className="lang-card__header">
                    <span className="lang-card__name">{lang.name}</span>
                    <span className="lang-card__level">{lang.level}</span>
                  </div>
                  <div className="lang-card__bar">
                    <div
                      className="lang-card__progress"
                      style={{
                        width: lang.name === 'Español' || lang.name === 'Spanish' ? '100%' : '75%',
                        background: lang.name === 'Español' || lang.name === 'Spanish' ? 'var(--accent)' : 'var(--primary)',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
