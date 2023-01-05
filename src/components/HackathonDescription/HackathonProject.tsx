import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import RedditIcon from '@mui/icons-material/Reddit';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IHackathonProject } from '../../interfaces/common';

const HackathonDescription: React.FC<{
  id: string;
  hackathonName: string;
  project: IHackathonProject;
}> = ({ id, hackathonName, project }) => {
  const shareLinks = [
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${project.repository}`,
      icon: <LinkedInIcon sx={{ width: 32, height: 32 }} />,
      color: 'primary.main',
    },
    {
      href: `https://www.reddit.com/submit?url=${project.repository}`,
      icon: (
        <RedditIcon
          sx={{
            width: 28,
            height: 28,
            transform: 'translateY(4px)',
            backgroundColor: 'orangered',
            borderRadius: '50%',
          }}
        />
      ),
      color: 'white',
    },
  ];
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
        <Stack spacing={1}>
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
            Purpose
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {project.purpose}
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
          <Typography variant='subtitle1' color='grey.600'>
            Share
          </Typography>
          <Stack key='shareLinks' direction='row' spacing={2}>
            {shareLinks.map((link, index) => (
              <IconButton
                key={index}
                component='a'
                href={link.href}
                target='_blank'
                rel='noreferrer'
                sx={{
                  width: 23,
                  height: 23,
                  margin: 0.5,
                  color: link.color,
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HackathonDescription;
