import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Markdown from '../../utils/Markdown';
import { IEvent } from './index.d';

const Event: React.FC<{ event: IEvent }> = ({ event }) => {
  return (
    <Stack spacing={4} key={event.title}>
      <Typography variant='h2' color='primary.main'>
        <Link
          underline='hover'
          key='1'
          color='inherit'
          component={RouterLink}
          to={`/events/${event.title}`}
        >
          {event.title}
        </Link>
      </Typography>
      {event.logo !== undefined && (
        <Box justifyContent='flex-start' sx={{ display: 'flex' }}>
          <Box
            component='img'
            src={event.logo}
            sx={{ maxHeight: 200, borderRadius: 1, maxWidth: '100%' }}
          />
        </Box>
      )}
      <Markdown>{event.description}</Markdown>
    </Stack>
  );
};

export default Event;
