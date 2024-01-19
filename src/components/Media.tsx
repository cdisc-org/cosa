import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Markdown from '../utils/Markdown';
import mediaLinks from '../assets/media/media.json';

const Media: React.FC = () => {
  return (
    <Stack sx={{ mt: 4 }} spacing={2} alignItems={'center'}>
      <Grid container spacing={2}>
        {mediaLinks.map((item: string, index) => (
          <Grid xs={12} md={6} item key={index}>
            <Markdown>{`<iframe src='${item}' width="444px" height="250px"/>`}</Markdown>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Media;
