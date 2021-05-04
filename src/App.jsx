import React from 'react';

import './index.scss';
import { Navbar } from './componets/Navbar/Navbar';
import { Home } from './componets/Home/Home';
import { About } from './componets/About/About';
import { Work } from './componets/Work/Work';
import { Services } from './componets/Services/Services';

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Services />
    </>
  );
};
