import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    text: palette.text,
    background: palette.background,
    divider: palette.divider,
    tertiary: palette.tertiary,
    footerbg: palette.footerbg,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: palette.text.primary,
    },
    h2: {
      fontWeight: 600,
      color: palette.text.primary,
    },
    h3: {
      fontWeight: 600,
      color: palette.text.primary,
    },
    h4: {
      fontWeight: 600,
      color: palette.text.primary,
    },
    h5: {
      fontWeight: 600,
      color: palette.text.primary,
    },
    h6: {
      fontWeight: 500,
      color: palette.text.white,
    },
    body1: {
      color: palette.text.secondary,
    },
    body2: {
      color: palette.text.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
        signupbtn: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            backgroundColor: palette.secondary.dark,
            transition: 'all 0.3s ease'
          },
        },
        signinbtn: {
          backgroundColor: palette.tertiary.main,
          color: palette.secondary.main,
          border: `1px solid ${palette.secondary.main}`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            border: `1px solid ${palette.tertiary.main}`,
            backgroundColor: palette.secondary.main,
            color: palette.tertiary.main,
            transition: 'all 0.3s ease'
          },
        },

      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme; 