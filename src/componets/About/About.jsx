import './about.scss';
import aboutImg from '../../assets/img/about-img.jpg';
import { useLanguage } from '../../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">
              {t.about.intro} <strong>{t.about.introHighlight}</strong> {t.about.intro2} <strong>{t.about.intro3}</strong> {t.about.intro4} <strong>{t.about.intro5}</strong>{t.about.intro6}
            </p>
            <p>
              {t.about.p1} <strong>{t.about.p1Highlight}</strong>{t.about.p1Cont} <strong>{t.about.p1Highlight2}</strong>{t.about.p1Cont2}
            </p>
            <p>
              {t.about.p2}
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">4+</div>
                <div className="about__stat-label">{t.about.stats.experience}</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">10+</div>
                <div className="about__stat-label">{t.about.stats.projects}</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">26</div>
                <div className="about__stat-label">{t.about.stats.age}</div>
              </div>
            </div>
          </div>

          <div className="about__image-wrapper">
            <div className="about__image-bg"></div>
            <img src={aboutImg} alt="Michael Molina" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
};
