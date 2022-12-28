import React from 'react';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import hackathons from '../assets/hackathons/hackathons.json';
import { IDirectoryItem as IHackathonItem } from '../interfaces/common.d';

const HackathonItem: React.FC<{ item: IHackathonItem }> = ({ item }) => {
  return (
    <ListItem disablePadding key={item.name}>
      <ListItemButton component={RouterLink} to={`/hackathons/${item.id}`}>
        <ListItemIcon sx={{ width: 50, mr: 2, justifyContent: 'center' }}>
          <Box
            component='img'
            sx={{ height: 50 }}
            src={require(`../assets/hackathons/${item.id}/logo.png`)}
          />
        </ListItemIcon>
        <ListItemText primary={item.name} secondary={item.description} />
      </ListItemButton>
    </ListItem>
  );
};

const Hackathons: React.FC = () => {
  return (
    <Stack sx={{ flex: '1', my: 2, mx: 1 }} spacing={3}>
      <Typography variant='h1'>Hackathons</Typography>
      <Typography variant='body1'></Typography>
      <Stack direction='row' spacing={8}>
        <List>
          {hackathons
            .sort((item1, item2) => {
              if (item1.name.toLowerCase() > item2.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((item) => (
              <HackathonItem item={item as IHackathonItem} />
            ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Hackathons;
