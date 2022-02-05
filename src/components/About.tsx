import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Markdown from '../utils/Markdown';
import aboutBoard from '../assets/content/about_board.md';

const About: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const newData = await (await fetch(aboutBoard)).text();
      setData(newData);
    };
    loadData();
  }, []);

  return (
    <Box sx={{ mx: 4, my: 2 }}>
      <Markdown>{data}</Markdown>
    </Box>
  );
};

export default About;
