import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../utils/theme';
import Header from './Header';
import Directory from './Directory';
import About from './About';
import Events from './Events';
import Application from './Application';
import ProjectDescription from './ProjectDescription';

const App: React.FC = () => {
  const [page, setPage] = useState('directory');

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          backgroundColor: 'grey.50',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        <Header onPageUpdate={handlePageChange} />
        <Box sx={{ overflowY: 'auto' }}>
          {page === 'directory' && (
            <Directory onPageUpdate={handlePageChange} />
          )}
          {page === 'about' && <About />}
          {page === 'events' && <Events />}
          {page === 'application' && <Application />}
          {page.startsWith('project/') && (
            <ProjectDescription id={page.replace(/project\//, '')} />
          )}
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
