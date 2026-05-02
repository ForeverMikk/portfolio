import ScrollToTop from 'react-scroll-to-top';
import './index.scss';
import { Navbar } from './componets/Navbar/Navbar';
import { Home } from './componets/Home/Home';
import { About } from './componets/About/About';
import { Skills } from './componets/Skills/Skills';
import { Experience } from './componets/Experience/Experience';
import { Education } from './componets/Education/Education';
import { Projects } from './componets/Projects/Projects';
import { Contact } from './componets/Contact/Contact';
import { Footer } from './componets/Footer/Footer';
import { EasterEgg } from './componets/EasterEgg/EasterEgg';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <ScrollToTop 
        smooth 
        color={theme === 'cyberpunk' ? '#00ffff' : '#4fa1eb'}
        style={{
          backgroundColor: theme === 'cyberpunk' ? '#0a0014' : '#000000',
          borderRadius: '50%',
          boxShadow: theme === 'cyberpunk' 
            ? '0 4px 12px rgba(255, 0, 255, 0.5)' 
            : '0 4px 12px rgba(79, 161, 235, 0.3)',
          border: `2px solid ${theme === 'cyberpunk' ? '#00ffff' : '#4fa1eb'}`,
        }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <EasterEgg />
      <Footer />
    </>
  );
};

export default App;
