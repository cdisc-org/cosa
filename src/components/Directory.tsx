import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';

const data = [
  {
    id: 'admiral',
    name: 'Admiral',
    description: 'ADaM in R Asset Library.',
    categories: ['ADaM'],
  },
  {
    id: 'odmlib',
    name: 'odmlib',
    description:
      'odmlib is a Python library that simplifies creating and processing ODM and its extensions, such as Define-XML.',
    categories: ['Define-XML', 'ODM', 'Dataset-XML'],
  },
  {
    id: 'studyBuilder',
    name: 'Study Builder',
    description:
      'A new approach to working with studies that once fully implemented will drive end-to-end consistency and more efficient processes.',
    categories: ['CDISC CT', 'CDASH', 'SDTM', 'ADaM'],
  },
  {
    id: 'tplyr',
    name: 'Tplyr',
    description:
      'Tplyr is a grammar of data format and summary, designed to simplify the creation of clinical safety summaries.',
    categories: ['ADaM', 'SDTM'],
  },
  {
    id: 'vde',
    name: 'Visual Define-XML Editor',
    description: 'Visual Editor for Define-XML 2.0 and ARM standards.',
    categories: ['Define-XML', 'ARM'],
  },
];

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

interface IDirectoryProps {
  onPageUpdate: (page: string) => void;
}

const Directory: React.FC<IDirectoryProps> = ({
  onPageUpdate,
}: IDirectoryProps) => {
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

  const handlePageSelect = (name: string) => {
    onPageUpdate(name);
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
    <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
      <Stack sx={{ ml: 2 }}>
        <TextField
          size='small'
          onKeyPress={handleFilterChange}
          InputProps={{ sx: { backgroundColor: 'white' } }}
        />
        <List>
          {category !== null && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleSelectCategory(null);
                }}
              >
                <ListItemText
                  sx={{ width: '100%' }}
                  primary={
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography variant='body2' color='grey.700'>
                        View All
                      </Typography>
                      <Typography variant='subtitle2' color='grey.500'>
                        {Object.keys(data).length}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItemButton>
            </ListItem>
          )}
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
                      <Typography variant='body2' color='grey.700'>
                        {name}
                      </Typography>
                      <Typography variant='subtitle2' color='grey.500'>
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
        {filteredData.map((item) => (
          <ListItem disablePadding key={item.name}>
            <ListItemButton
              onClick={() => {
                handlePageSelect(`project/${item.id}`);
              }}
            >
              <ListItemIcon sx={{ width: 50, mr: 2, justifyContent: 'center' }}>
                <Box
                  component='img'
                  sx={{ height: 50 }}
                  src={require(`../assets/projects/${item.id}/logo.png`)}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} secondary={item.description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Directory;
