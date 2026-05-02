import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    home: {
      greeting: 'Hola, soy',
      title: 'Ingeniero de Software &',
      titleHighlight: 'Frontend Developer',
      subtitle: 'React, Next.js y UX/UI',
      description:
        'Más de 4 años construyendo aplicaciones web de alto rendimiento. Especializado en optimización de UX/UI, SEO e integración de pasarelas de pago (Openpay) y analíticas (Infobit) orientadas a las métricas del negocio.',
      downloadCV: 'Descargar CV',
      viewProjects: 'Ver Proyectos',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Desarrollador',
      introHighlight: 'Frontend',
      intro2: 'especializado en',
      intro3: 'ReactJS',
      intro4: 'y',
      intro5: 'Next.js',
      intro6: ', con experiencia en plataformas escalables, SEO y productos orientados a conversión.',
      p1: 'Domino',
      p1Highlight: 'Tailwind CSS',
      p1Cont: ', arquitectura mobile-first y integración de',
      p1Highlight2: 'APIs y analíticas',
      p1Cont2: '. Combino diseño de interfaces claras con rendimiento y accesibilidad.',
      p2: 'Trabajo con TypeScript, componentes reutilizables, SSR/API Routes y despliegue continuo (por ejemplo Netlify), priorizando código mantenible y entrega ágil.',
      stats: {
        experience: 'Años de experiencia',
        projects: 'Proyectos completados',
        age: 'Años',
      },
    },
    skills: {
      title: 'Habilidades',
      tech: 'Stack Tecnológico',
      soft: 'Habilidades Blandas',
      certifications: 'Certificaciones',
    },
    experience: {
      title: 'Experiencia',
      jobs: 'Empleos',
      freelance: 'Freelance / Proyectos',
    },
    education: {
      title: 'Formación & Idiomas',
      academic: 'Formación Académica',
      languages: 'Idiomas',
      native: 'Nativo',
      english:
        'B2 (Intermedio Alto — conversaciones técnicas y consumo de documentación)',
    },
    projects: {
      title: 'Proyectos Destacados',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¡Hablemos!',
      description: 'Estoy abierto a nuevas oportunidades y proyectos interesantes. Si tienes alguna pregunta o quieres trabajar juntos, no dudes en contactarme.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Gracias! Tu mensaje ha sido enviado.',
    },
    footer: {
      tagline: 'Ingeniero de Software · Frontend · React, Next.js, UX/UI y SEO',
      rights: 'Todos los derechos reservados.',
      made: 'Hecho con',
      using: 'usando React',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      greeting: 'Hi, I am',
      title: 'Software Engineer &',
      titleHighlight: 'Frontend Developer',
      subtitle: 'React, Next.js & UX/UI',
      description:
        '4+ years building high-performance web applications. I focus on UX/UI optimization, SEO, and integrations such as Openpay (payments) and Infobit (analytics) to support business metrics.',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      intro: 'Frontend Developer',
      introHighlight: 'Frontend',
      intro2: 'specialized in',
      intro3: 'ReactJS',
      intro4: 'and',
      intro5: 'Next.js',
      intro6: ', with experience in scalable platforms, SEO, and conversion-oriented products.',
      p1: 'Strong experience with',
      p1Highlight: 'Tailwind CSS',
      p1Cont: ', mobile-first architecture, and',
      p1Highlight2: 'APIs & analytics',
      p1Cont2: ' integrations. I pair clear UI design with performance and accessibility.',
      p2: 'I work with TypeScript, reusable components, SSR/API Routes, and continuous deployment (e.g. Netlify), emphasizing maintainable code and fast delivery.',
      stats: {
        experience: 'Years of experience',
        projects: 'Projects completed',
        age: 'Years',
      },
    },
    skills: {
      title: 'Skills',
      tech: 'Tech Stack',
      soft: 'Soft Skills',
      certifications: 'Certifications',
    },
    experience: {
      title: 'Experience',
      jobs: 'Employment',
      freelance: 'Freelance / Projects',
    },
    education: {
      title: 'Education & Languages',
      academic: 'Academic Background',
      languages: 'Languages',
      native: 'Native',
      english: 'B2 (Upper Intermediate - Professional working proficiency)',
    },
    projects: {
      title: 'Featured Projects',
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk!",
      description: 'I am open to new opportunities and interesting projects. If you have any questions or want to work together, feel free to contact me.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you! Your message has been sent.',
    },
    footer: {
      tagline: 'Software Engineer · Frontend · React, Next.js, UX/UI & SEO',
      rights: 'All rights reserved.',
      made: 'Made with',
      using: 'using React',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    const metaDescription = {
      es: 'Michael Molina — Ingeniero de Software y Frontend Developer en Estado de México. React, Next.js, UX/UI, SEO, Openpay e Infobit. Portafolio y CV.',
      en: 'Michael Molina — Software Engineer & Frontend Developer in Mexico. React, Next.js, UX/UI, SEO, Openpay & Infobit. Portfolio and resume download.',
    };

    document.documentElement.lang = language === 'es' ? 'es-MX' : 'en';
    document.title =
      language === 'es'
        ? 'Michael Molina | Ingeniero de Software & Frontend Developer'
        : 'Michael Molina | Software Engineer & Frontend Developer';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', metaDescription[language]);
  }, [language]);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

