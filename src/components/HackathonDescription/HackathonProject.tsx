import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import RedditIcon from '@mui/icons-material/Reddit';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import { IHackathonProject } from '../../interfaces/common';

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// YouTube Video Embed Component
const YouTubeEmbed: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        mb: 2,
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </Box>
  );
};

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
          <Typography
            variant='body1'
            color='grey.800'
            sx={{ whiteSpace: 'pre-line' }}
          >
            {project.description}
          </Typography>

          {project.purpose && (
            <>
              <Typography variant='subtitle1' color='grey.600'>
                Purpose
              </Typography>
              <Typography variant='body1' color='grey.800'>
                {project.purpose}
              </Typography>
            </>
          )}

          <Typography variant='subtitle1' color='grey.600'>
            Authors
          </Typography>
          <Typography variant='body1' color='grey.800'>
            {(project.author as Array<string>).join(', ')}
          </Typography>

          {project.video && (
            <>
              <Typography variant='subtitle1' color='grey.600'>
                Video
              </Typography>
              <YouTubeEmbed videoUrl={project.video} />
            </>
          )}

          {project.demo && (
            <>
              <Typography variant='subtitle1' color='grey.600'>
                Demo
              </Typography>
              <Link href={project.demo} target='_blank' rel='noopener'>
                {project.demo}
              </Link>
            </>
          )}

          {project.contacts && (
            <>
              <Typography variant='subtitle1' color='grey.600'>
                Contacts
              </Typography>
              {(project.contacts as Array<string>).map((contact, index) => (
                <Typography key={index} variant='body1' color='grey.800'>
                  {contact}
                </Typography>
              ))}
            </>
          )}

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
