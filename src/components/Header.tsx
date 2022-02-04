import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/images/cosaLogo.svg';

const pages = [
  { name: 'Directory', page: 'directory' },
  { name: 'About', page: 'about' },
  { name: 'Events', page: 'events' },
  { name: 'Application', page: 'application' },
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
            <Typography variant='h5' sx={{ ml: 2, color: 'grey.400' }}>
              CDISC Open Source Alliance
            </Typography>
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center' sx={{ pr: 4 }}>
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
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
