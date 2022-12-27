import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import data from '../assets/projects/projects.json';
import { IDirectoryItem } from '../interfaces/common.d';

let categories: Array<string> = [];
const categoryCount: { [name: string]: number } = {};

data.forEach((item) => {
  item.categories.forEach((category) => {
    if (!categories.includes(category)) {
      categories.push(category);
      categoryCount[category] = 1;
    } else {
      categoryCount[category] += 1;
    }
  });
});

categories = categories.sort((cat1, cat2) => {
  return categoryCount[cat1] > categoryCount[cat2] ? -1 : 1;
});

const DirectoryItem: React.FC<{ item: IDirectoryItem }> = ({ item }) => {
  let link;
  if (item.type === 'hackathon') {
    link = `hackathons/${item.id}`;
  } else {
    link = `directory/${item.id}`;
  }
  return (
    <ListItem disablePadding key={item.name}>
      <ListItemButton component={RouterLink} to={link}>
        <ListItemIcon sx={{ width: 50, mr: 2, justifyContent: 'center' }}>
          <Box
            component='img'
            sx={{ height: 50 }}
            src={
              item.type === 'hackathon'
                ? require(`../assets/hackathons/${item.id}/logo.png`)
                : require(`../assets/projects/${item.id}/logo.png`)
            }
          />
        </ListItemIcon>
        <ListItemText primary={item.name} secondary={item.description} />
      </ListItemButton>
    </ListItem>
  );
};

const Directory: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const handleFilterChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setFilter((event.target as HTMLInputElement).value);
    }
  };

  const handleSelectCategory = (name: string | null) => {
    if (name === category) {
      // Unselect current category
      setCategory(null);
    } else {
      setCategory(name);
    }
  };

  const filteredData = data
    .filter((item) => {
      if (category === null) {
        // No category selected
        return true;
      } else {
        return item.categories.includes(category);
      }
    })
    .filter((item) => {
      if (filter !== '') {
        return (
          item.name.toLowerCase().includes(filter) ||
          item.description.toLowerCase().includes(filter)
        );
      } else {
        return true;
      }
    });

  return (
    <Stack sx={{ flex: '1', my: 2, mx: 1 }} spacing={3}>
      <Typography variant='h1'>COSA Repository Directory</Typography>
      <Typography variant='body1'>
        The following repositories are officially recognized by COSA as being
        open-source projects focused on implementing or developing CDISC
        standards to drive innovation in the CDISC community. All COSA projects
        must meet the{' '}
        <Link component={RouterLink} to='/about' underline='none'>
          inclusion criteria
        </Link>{' '}
        to be considered for inclusion the Repository Directory.
      </Typography>
      <Stack direction='row' spacing={8}>
        <Stack sx={{ ml: 2 }}>
          <TextField
            size='small'
            onKeyPress={handleFilterChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
          />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleSelectCategory(null);
                }}
                disabled={category === null}
              >
                <ListItemText
                  sx={{ width: '100%' }}
                  primary={
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography variant='body2' color='grey.700'>
                        View All
                      </Typography>
                      <Typography variant='subtitle2' color='grey.600'>
                        {Object.keys(data).length}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItemButton>
            </ListItem>
            {categories.map((name) => (
              <ListItem disablePadding key={name}>
                <ListItemButton
                  selected={name === category}
                  onClick={() => {
                    handleSelectCategory(name);
                  }}
                >
                  <ListItemText
                    sx={{ width: '100%' }}
                    primary={
                      <Stack direction='row' justifyContent='space-between'>
                        <Typography variant='body2' color='grey.800'>
                          {name}
                        </Typography>
                        <Typography variant='subtitle2' color='grey.600'>
                          {categoryCount[name]}
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
        <List>
          {filteredData
            .sort((item1, item2) => {
              if (item1.name.toLowerCase() > item2.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((item) => (
              <DirectoryItem item={item as IDirectoryItem} />
            ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Directory;
