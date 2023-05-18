import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(var(--primary-rgb))',
    },
    secondary: {
      main: 'rgb(var(--secondary-main-rgb))',
      light: 'rgb(var(--secondary-light-rgb))',
    },
  },
  typography: {
    fontFamily: 'var(--font-mono)',
  },
});
