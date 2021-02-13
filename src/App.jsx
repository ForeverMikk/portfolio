import React from 'react';

import './index.scss';
import { Navbar } from './componets/Navbar/Navbar';
import { Home } from './componets/Home/Home';
import { About } from './componets/About/About';

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
};
