import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/values/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.turquoise['500'],
    },
    secondary: {
      main: COLORS.gray['700'],
      light: COLORS.gray['500'],
    },
    background: {
      default: COLORS.gray['700'],
      paper: COLORS.gray['900'],
    },
  },

  typography: {
    fontFamily: 'Source Code Pro',
  },
});
