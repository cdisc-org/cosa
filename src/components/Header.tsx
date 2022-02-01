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
];

interface IHeaderProps {
  onPageUpdate: (page: string) => void;
}

const Header: React.FC<IHeaderProps> = ({ onPageUpdate }: IHeaderProps) => {
  return (
    <AppBar
      position='static'
      sx={{ height: 65, backgroundColor: 'primary.dark' }}
    >
      <Toolbar disableGutters>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Box sx={{ width: 50, height: 50, ml: 2 }}>
            <img src={Logo} />
          </Box>
          <Typography variant='h6' sx={{ ml: 2 }}>
            COSA
          </Typography>
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
      </Toolbar>
    </AppBar>
  );
};
export default Header;
