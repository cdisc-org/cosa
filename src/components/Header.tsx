import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/cosaLogo.svg';
import GithubLogo from '../assets/images/github.svg';
import RedditLogo from '../assets/images/reddit.svg';

const pages = [
  { name: 'Directory', page: 'directory' },
  { name: 'About', page: 'about' },
  { name: 'Events', page: 'events' },
  { name: 'Application', page: 'application' },
];

const icons = [
  { href: 'https://github.com/cdisc-org/cosaDirectory', src: GithubLogo },
  { href: 'https://www.reddit.com/r/CDISC_COSA/', src: RedditLogo },
];

interface IHeaderProps {
  onPageUpdate: (page: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ onPageUpdate }: IHeaderProps) => {
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
          <Stack direction='row' spacing={2} alignItems='center'>
            <Box sx={{ width: 40, height: 40, ml: 2 }}>
              <img src={Logo} />
            </Box>
            <Typography variant='h3' sx={{ ml: 2, color: 'grey.400' }}>
              CDISC Open Source Alliance
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center' sx={{ pr: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  onPageUpdate(page.page);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            <Stack key='icons' direction='row' spacing={0}>
              {icons.map((icon, index) => (
                <IconButton
                  key={index}
                  component='a'
                  href={icon.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Box
                    sx={{
                      width: 23,
                      height: 23,
                      filter: 'invert(100%)',
                      transform: 'translateY(-2px)',
                    }}
                    component='img'
                    src={icon.src}
                  />
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
