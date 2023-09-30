import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#E9E7E7'
    },
    secondary: {
      main: '#D6C934'
    },
    background: {
      main: '#379C49'
    },
    action: {
      main: '#3E9CF5'
    }
  },
  typography: {
    caption: {
      fontFamily: 'Lato',
      lineHeight: 1.92
    },
    fontWeightLight: 100,
    h1: {
      fontFamily: 'Lora',
      lineHeight: 1.15
    },
    h2: {
      fontFamily: 'Lato'
    },
    button: {
      fontWeight: 600
    },
  }
});


