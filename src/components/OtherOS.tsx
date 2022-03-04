import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Markdown from '../utils/Markdown';
import markdown from '../assets/content/other_os.md';

const OtherOS: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const readData = await (await fetch(markdown)).text();
      setData(readData);
    };
    loadData();
  }, []);

  return (
    <Box sx={{ mx: 4, my: 2 }}>
      <Markdown>{data}</Markdown>
    </Box>
  );
};

export default OtherOS;
