'use client';

import React from 'react';
import { Hero, About, Stack, Projects, Contact } from '@/sections';
import { ThemeProvider } from '@mui/system';
import { theme } from '@/utils/theme';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/global';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default Home;
