import React from 'react';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import aboutBoard from '../assets/content/about_board.md';

const About: React.FC = () => {
  // https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript

  console.log(aboutBoard);

  return (
    <Stack sx={{ m: 4 }} spacing={2}>
      <Typography variant='h5' color='grey.600'>
        CDISC Open Source Alliance
      </Typography>
      <Typography variant='body1' color='grey.900'>
        The CDISC Open-Source Alliance (COSA) supports, promotes, and sometimes
        sponsors open-source software projects that create tools for
        implementing or developing CDISC standards to drive innovation in the
        CDISC community. See more at&nbsp;
        <Link href='https://cosa.cdisc.org/' target='_blank' rel='noopener'>
          cosa.cdisc.org
        </Link>
      </Typography>
    </Stack>
  );
};

export default About;
