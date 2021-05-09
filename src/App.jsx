import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

import './index.scss';
import { Navbar } from './componets/Navbar/Navbar';
import { Home } from './componets/Home/Home';
import { About } from './componets/About/About';
import { Work } from './componets/Work/Work';
import { Portfolio } from './componets/Portfolio/Portfolio';
import { Services } from './componets/Services/Services';
import { Contact } from './componets/Contact/Contact';
import { Footer } from './componets/Footer/Footer';

export const App = () => {
  return (
    <>
      <ScrollToTop smooth />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
