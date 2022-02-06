import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../utils/theme';
import Header from './Header';
import RouterManager from './RouteManager';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Stack
          sx={{
            backgroundColor: 'grey.50',
            height: '100vh',
            overflowY: 'hidden',
          }}
        >
          <Header />
          <Box sx={{ overflowY: 'auto', flex: '1 1 auto' }}>
            <RouterManager />
          </Box>
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
