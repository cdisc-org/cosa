import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { IHackathon } from '../../interfaces/common';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import HackathonInfo from './HackathonInfo';

const HackathonDirectory: React.FC<{
  hackathonInfo: IHackathon['hackathonInfo'];
  projects: IHackathon['projects'];
  id: string;
}> = ({ hackathonInfo, projects, id }) => {
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
          {hackathonInfo.name}
        </Link>
      </Breadcrumbs>
      <Stack sx={{ flex: '1', my: 2, mx: 1 }} spacing={3}>
        <Stack direction='row' spacing={8}>
          <Box sx={{ flex: '0 0 30%' }}>
            <HackathonInfo info={hackathonInfo} id={id as string} />
          </Box>
          <Stack sx={{ flex: '1', my: 2, mx: 1 }} spacing={3}>
            <Typography variant='h1' sx={{ textAlign: 'center' }}>
              {hackathonInfo.name}
            </Typography>
            <Typography variant='body1'></Typography>
            <Stack direction='row' spacing={8}>
              <List>
                {Object.keys(projects)
                  .sort((item1, item2) => {
                    if (
                      projects[item1].name.toLowerCase() >
                      projects[item2].name.toLowerCase()
                    ) {
                      return 1;
                    } else {
                      return -1;
                    }
                  })
                  .map((item) => (
                    <ListItem disablePadding key={projects[item].name}>
                      <ListItemButton
                        component={RouterLink}
                        to={`/hackathons/${id}/${item}`}
                      >
                        <ListItemText
                          primary={projects[item].name}
                          secondary={projects[item].description}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HackathonDirectory;
