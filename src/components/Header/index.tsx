import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/images/cdiscLogo.png';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EventsMenu from './EventsMenu';
import OtherMenu from './OtherMenu';

const pages = [
  { name: 'Directory', to: '' },
  { name: 'About', to: 'about' },
  { name: 'Events', to: '' },
  { name: 'Application', to: 'application' },
];

const icons = [
  {
    href: 'https://github.com/cdisc-org/cosa',
    icon: <GitHubIcon />,
  },
  {
    href: 'https://www.reddit.com/r/CDISC_COSA/',
    icon: <RedditIcon />,
  },
  {
    href: 'https://www.linkedin.com/groups/12563665/',
    icon: <LinkedInIcon />,
  },
];

const Header: React.FC = () => {
  return (
    <AppBar
      position='sticky'
      sx={{ height: 65, backgroundColor: 'primary.main' }}
    >
      <Toolbar disableGutters>
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='space-between'
          sx={{ width: '100%' }}
        >
          <Stack direction='row' spacing={3} alignItems='center'>
            <Link href='https://cdisc.org' target='_blank' rel='noreferrer'>
              <Box sx={{ width: 100, ml: 2 }} component='img' src={Logo} />
            </Link>
            <Typography variant='h3' sx={{ ml: 2, color: 'grey.400' }}>
              CDISC Open Source Alliance
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center' sx={{ pr: 2 }}>
            {pages.map((page) => {
              if (page.name === 'Events') {
                return <EventsMenu />;
              } else {
                return (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.to}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                );
              }
            })}
            <OtherMenu />
            <Stack key='icons' direction='row' spacing={0}>
              {icons.map((icon, index) => (
                <IconButton
                  key={index}
                  component='a'
                  href={icon.href}
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    width: 23,
                    height: 23,
                    margin: 0.5,
                    transform: 'translateY(-2px)',
                    color: 'white',
                  }}
                >
                  {icon.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
