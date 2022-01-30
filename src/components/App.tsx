import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Directory from './Directory';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [page, setPage] = useState('directory');

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'grey.50', height: '100vh' }}>
        <Stack>
          <Header onPageUpdate={handlePageChange} />
          {page === 'directory' && (
            <Directory onPageUpdate={handlePageChange} />
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
