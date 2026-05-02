import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import work1 from '../../assets/img/work1.jpg';
import work2 from '../../assets/img/work2.jpg';
import work3 from '../../assets/img/work3.jpg';
import work4 from '../../assets/img/work4.jpg';
import work5 from '../../assets/img/work5.jpg';
import work6 from '../../assets/img/work6.jpg';
import './projects.scss';

const projects = {
  es: [
    {
      title: 'Binahria Analytics',
      description: 'Página principal de la consultora Binahria Analytics mostrando todos sus servicios',
      tech: ['React', 'Tailwind CSS'],
      img: work1,
      github: 'https://github.com/ForeverMikk/binahria-page',
      live: 'https://stupendous-longma-93742a.netlify.app/catalogo',
    },
    {
      title: 'Tania Meza Web Page',
      description: 'Sitio web dedicado a funcionarios públicos, donde comparten su vida diaria y campañas futuras',
      tech: ['React', 'CSS'],
      img: work2,
      github: 'https://github.com/ForeverMikk/tania-meza',
      live: 'https://taniameza.mx/',
    },
    {
      title: 'Mobilesco App',
      description: 'Aplicación creada para la administración y visualización de muebles de empresa',
      tech: ['React', 'Tailwind CSS', 'APIs'],
      img: work3,
      github: 'https://github.com/ForeverMikk/mobilesco',
      live: 'https://www.mobilesco.mx/',
    },
    {
      title: 'Shopping Car Example',
      description: 'Proyecto personal simulando un catálogo de autos con carrito de compras',
      tech: ['Next.js', 'React'],
      img: work6,
      github: 'https://github.com/ForeverMikk/nextjs-example',
    },
    {
      title: 'Balché Nikte',
      description: 'Sitio web enfocado en productos de cuidado de la piel',
      tech: ['HTML', 'CSS', 'JavaScript'],
      img: work4,
      github: 'https://github.com/ForeverMikk/balche-nikte',
      live: 'https://torpid-hot-socks.glitch.me/',
    },
    {
      title: 'Giphy API',
      description: 'Gif Expert App - una app construida para mostrarte tus gifs favoritos',
      tech: ['React', 'APIs'],
      img: work5,
      github: 'https://forevermikk.github.io/gif-expert-app/',
      live: 'https://gif-expert-michael.netlify.app/',
    },
  ],
  en: [
    {
      title: 'Binahria Analytics',
      description: 'Main page of Binahria Analytics consultancy showcasing all their services',
      tech: ['React', 'Tailwind CSS'],
      img: work1,
      github: 'https://github.com/ForeverMikk/binahria-page',
      live: 'https://stupendous-longma-93742a.netlify.app/catalogo',
    },
    {
      title: 'Tania Meza Web Page',
      description: 'Website dedicated to public officials, where they share their daily life and future campaigns',
      tech: ['React', 'CSS'],
      img: work2,
      github: 'https://github.com/ForeverMikk/tania-meza',
      live: 'https://taniameza.mx/',
    },
    {
      title: 'Mobilesco App',
      description: 'Application created for the administration and visualization of company furniture',
      tech: ['React', 'Tailwind CSS', 'APIs'],
      img: work3,
      github: 'https://github.com/ForeverMikk/mobilesco',
      live: 'https://www.mobilesco.mx/',
    },
    {
      title: 'Shopping Car Example',
      description: 'Personal project simulating a car catalog with shopping cart',
      tech: ['Next.js', 'React'],
      img: work6,
      github: 'https://github.com/ForeverMikk/nextjs-example',
    },
    {
      title: 'Balché Nikte',
      description: 'Website focused on skin care products',
      tech: ['HTML', 'CSS', 'JavaScript'],
      img: work4,
      github: 'https://github.com/ForeverMikk/balche-nikte',
      live: 'https://torpid-hot-socks.glitch.me/',
    },
    {
      title: 'Giphy API',
      description: 'Gif Expert App - an app built to show you your favorite gifs',
      tech: ['React', 'APIs'],
      img: work5,
      github: 'https://forevermikk.github.io/gif-expert-app/',
      live: 'https://gif-expert-michael.netlify.app/',
    },
  ],
};

export const Projects = () => {
  const { t, language } = useLanguage();
  const currentProjects = projects[language];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects__grid">
          {currentProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card__image-wrapper">
                <img src={project.img} alt={project.title} className="project-card__image" />
                <div className="project-card__overlay">
                  <div className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label="Live Site"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-card__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
