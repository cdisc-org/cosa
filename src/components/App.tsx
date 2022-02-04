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
      <Box sx={{ backgroundColor: 'grey.50', minHeight: '100vh' }}>
        <Stack>
          <Header onPageUpdate={handlePageChange} />
          {page === 'directory' && (
            <Directory onPageUpdate={handlePageChange} />
          )}
          {page === 'about' && <About />}
          {page === 'events' && <Events />}
          {page === 'application' && <Application />}
          {page.startsWith('project/') && (
            <ProjectDescription id={page.replace(/project\//, '')} />
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
