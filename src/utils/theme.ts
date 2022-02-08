import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#426B93',
      main: '#134678',
      dark: '#0D3154',
    },
    secondary: {
      light: '#5B93C7',
      main: '#3378BA',
      dark: '#235482',
    },
    error: {
      main: '#C94543',
    },
    warning: {
      main: '#EDAA00',
    },
    info: {
      main: '#3378BA',
    },
    success: {
      main: '#27AE60',
    },
    grey: {
      '50': '#FFFFFF',
      '100': '#FAFAFA',
      '200': '#F8F8F8',
      '300': '#F3F3F3',
      '400': '#E3E3E3',
      '500': '#C4C4C4',
      '600': '#8B8B8B',
      '700': '#555555',
      '800': '#333333',
      '900': '#222222',
    },
    text: {
      primary: '#222222',
      secondary: '#666666',
      disabled: '#C4C4C4',
    },
    background: {
      paper: '#FFF',
      default: '#FFF',
    },
    divider: '#E3E3E3',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: 48,
      color: '#134678',
    },
    h2: {
      fontWeight: 400,
      fontSize: 34,
      color: '#134678',
    },
    h3: {
      fontWeight: 300,
      fontSize: 24,
      color: '#134678',
    },
    h4: {
      fontWeight: 300,
      fontSize: 20,
      color: '#134678',
    },
    h5: {
      fontWeight: 300,
      fontSize: 16,
      color: '#134678',
    },
    h6: {
      fontWeight: 300,
      fontSize: 14,
      color: '#134678',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      color: '#134678',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      color: '#134678',
    },
  },
});

export default theme;
