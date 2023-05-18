'use client';

import { Hero } from '@/sections';
import { ThemeProvider } from '@mui/system';
import { theme } from '@/utils/theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
};

export default Home;
