import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFound: React.FC = () => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{ height: '100%', width: '100%', flex: '1 1 auto' }}
      spacing={2}
    >
      <Typography variant='h3'>Error 404</Typography>
      <Typography variant='body2'>Page Not Found</Typography>
      <Typography variant='h3' color='grey.600'>
        ¯\_(ツ)_/¯
      </Typography>
      <Button component={RouterLink} to='/' variant='contained'>
        Go Home
      </Button>
    </Stack>
  );
};

export default NotFound;
