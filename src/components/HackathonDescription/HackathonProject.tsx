import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { IHackathonProject } from '../../interfaces/common';

const HackathonDescription: React.FC<{
  id: string;
  hackathonName: string;
  project: IHackathonProject;
}> = ({ id, hackathonName, project }) => {
  return (
    <Stack spacing={2} sx={{ m: 4 }}>
      <Breadcrumbs separator='›' sx={{ pb: 2 }}>
        <Link
          underline='hover'
          key='1'
          color='inherit'
          component={RouterLink}
          to={`/hackathons`}
        >
          Hackathons
        </Link>
        <Link
          underline='hover'
          key='1'
          color='inherit'
          component={RouterLink}
          to={`/hackathons/${id}`}
        >
          {hackathonName}
        </Link>
        <Typography variant='subtitle1' color='grey.600'>
          {project.name}
        </Typography>
      </Breadcrumbs>
      <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
        <Stack spacing={2}>
          <Typography variant='subtitle1' color='grey.600'>
            Name
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {project.name}
          </Typography>
          <Typography variant='subtitle1' color='grey.600'>
            Description
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {project.description}
          </Typography>
          <Typography variant='subtitle1' color='grey.600'>
            Authors
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {(project.author as Array<string>).join(', ')}
          </Typography>
          <Typography variant='subtitle1' color='grey.600'>
            Repository
          </Typography>
          <Link href={project.repository} target='_blank' rel='noopener'>
            {project.repository}
          </Link>
          <Typography variant='subtitle1' color='grey.600'>
            License
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {project.license}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HackathonDescription;
