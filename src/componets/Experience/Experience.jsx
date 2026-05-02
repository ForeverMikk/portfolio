import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import './experience.scss';

const experiences = {
  es: [
    {
      type: 'empleo',
      company: 'Doddoo Aceleradora de Viajes',
      position: 'Frontend Developer',
      period: 'Dic 2024 – Presente',
      location: 'Estado de México, México',
      achievements: [
        'Lidero el desarrollo desde cero de una plataforma web en Next.js (v16) para la visualización optimizada de paquetes turísticos, con fuerte enfoque en UX/UI.',
        'Implementé pasarela de pagos con Openpay (tarjeta, MSI y diferidos), asegurando transacciones vía API Routes de Next.js.',
        'Integré Infobit para seguimiento de eventos y análisis de comportamiento de usuarios.',
        'Establecí flujos CI/CD con Netlify para entregar funcionalidades de forma continua.',
        'Diseñé un componente robusto para el alta de hoteles con API de Google Maps (búsqueda, datos e imágenes).',
        'Implementé blog corporativo con arquitectura Headless CMS (WordPress), campos personalizados y optimización WPO.',
      ],
    },
    {
      type: 'empleo',
      company: 'PITE Consultoría de TI',
      position: 'Frontend Developer',
      period: 'Jul 2023 – Oct 2024',
      location: 'México',
      achievements: [
        'Contribuí en arquitectura y desarrollo de una plataforma no-code en Next.js para creación y administración de sitios web empresariales.',
        'Desarrollé la sección central de componentes Drag & Drop para interfaces sin código.',
        'Estandaricé el código con Storybook y validación estricta de esquemas con Zod.',
        'Creé componentes analíticos para KPIs con Chart.js (integración y personalización de gráficas).',
      ],
    },
    {
      type: 'empleo',
      company: 'Binahria Analytics',
      position: 'Frontend Developer Jr',
      period: 'Jul 2021 – Jun 2023',
      location: 'Hidalgo, México',
      achievements: [
        'Lideré la migración y refactorización del sitio web con React y Tailwind CSS; ~50% de mejora en posicionamiento SEO.',
        'Desarrollé "Mobilesco", e-commerce con APIs REST, carrito de cotización e inventario detallado.',
        'Mantuve y escalé una plataforma institucional en Angular 16 con componentes modulares y servicios inyectables.',
      ],
    },
    {
      type: 'empleo',
      company: 'Partake / Flimbo',
      position: 'Frontend Developer Jr',
      period: 'Nov 2020 – Jun 2021',
      location: 'Remoto',
      achievements: [
        'Participé en una red social móvil tipo Instagram con React e Ionic.',
        'Desarrollé componentes para cuentas, perfiles y secciones de contenido guardado.',
        'Maqueté y estilicé cerca del 30% de interfaces del feed principal (fotos y video).',
      ],
    },
  ],
  en: [
    {
      type: 'employment',
      company: 'Doddoo Aceleradora de Viajes',
      position: 'Frontend Developer',
      period: 'Dec 2024 – Present',
      location: 'State of Mexico, Mexico',
      achievements: [
        'Leading greenfield development of a Next.js (v16) web platform for tourism packages with a strong UX/UI focus.',
        'Implemented Openpay (cards, installments, deferred) with secured flows through Next.js API Routes.',
        'Integrated Infobit for event tracking and user behavior analytics.',
        'Set up CI/CD on Netlify for continuous delivery.',
        'Built a robust hotel onboarding module using the Google Maps API (search, data, and images).',
        'Delivered a corporate blog on a Headless CMS (WordPress) with custom fields and WPO improvements.',
      ],
    },
    {
      type: 'employment',
      company: 'PITE Consultoría de TI',
      position: 'Frontend Developer',
      period: 'Jul 2023 – Oct 2024',
      location: 'Mexico',
      achievements: [
        'Contributed to architecture and development of a Next.js no-code platform for enterprise websites.',
        'Built the core Drag & Drop component area for code-free UIs.',
        'Standardized UI with Storybook and strict schema validation using Zod.',
        'Shipped analytics components for KPIs with Chart.js integration and customization.',
      ],
    },
    {
      type: 'employment',
      company: 'Binahria Analytics',
      position: 'Frontend Developer Jr',
      period: 'Jul 2021 – Jun 2023',
      location: 'Hidalgo, Mexico',
      achievements: [
        'Led migration and refactor of the corporate site with React and Tailwind CSS; ~50% SEO uplift.',
        'Developed "Mobilesco", an e-commerce app with REST APIs, quotation cart, and detailed inventory.',
        'Maintained and scaled an Angular 16 institutional platform with modular components and injectable services.',
      ],
    },
    {
      type: 'employment',
      company: 'Partake / Flimbo',
      position: 'Frontend Developer Jr',
      period: 'Nov 2020 – Jun 2021',
      location: 'Remote',
      achievements: [
        'Helped build an Instagram-like hybrid mobile social app with React and Ionic.',
        'Developed modular components for accounts, profiles, and saved content.',
        'Built layout and styling for ~30% of the main photo/video feed UI.',
      ],
    },
  ],
};

const freelance = {
  es: [
    {
      company: 'Tania Meza (Gobierno)',
      period: '2022',
      description: 'Sitio institucional personal con información de logros y conexión con redes sociales'
    },
    {
      company: 'Mobilesco MX',
      period: '2022',
      description: 'Proyecto e-commerce mobiliario a medida con carrito de cotización'
    }
  ],
  en: [
    {
      company: 'Tania Meza (Government)',
      period: '2022',
      description: 'Personal institutional site with achievement information and social media connections'
    },
    {
      company: 'Mobilesco MX',
      period: '2022',
      description: 'Custom furniture e-commerce project with quotation cart'
    }
  ]
};

export const Experience = () => {
  const { t, language } = useLanguage();
  const currentExperiences = experiences[language];
  const currentFreelance = freelance[language];
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">{t.experience.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="experience__content">
          <div className="experience__jobs">
            <h3 className="experience__category">
              <FontAwesomeIcon icon={faBriefcase} />
              {t.experience.jobs}
            </h3>
            {currentExperiences.map((exp, idx) => (
              <div key={idx} className="experience__item">
                <div className="experience__header">
                  <div>
                    <h4 className="experience__position">{exp.position}</h4>
                    <div className="experience__company">{exp.company}</div>
                    <div className="experience__meta">
                      <span className="experience__period">{exp.period}</span>
                      <span className="experience__separator">•</span>
                      <span className="experience__location">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="experience__achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="experience__freelance">
            <h3 className="experience__category">
              <FontAwesomeIcon icon={faUser} />
              {t.experience.freelance}
            </h3>
            {currentFreelance.map((item, idx) => (
              <div key={idx} className="experience__item experience__item--freelance">
                <div className="experience__header">
                  <h4 className="experience__company">{item.company}</h4>
                  <span className="experience__period">{item.period}</span>
                </div>
                <p className="experience__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
