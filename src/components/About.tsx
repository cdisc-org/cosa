import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Markdown from '../utils/Markdown';

import './css/general.css';
import aboutBoard from '../assets/content/about_board.md';
import aboutCharter from '../assets/content/about_charter.md';
import aboutEvaluationCriteria from '../assets/content/about_evaluation_criteria.md';

const About: React.FC = () => {
  const [data, setData] = useState({
    aboutBoard: '',
    aboutCharter: '',
    aboutEvaluationCriteria: '',
  });

  useEffect(() => {
    const loadData = async () => {
      const dataAboutBoard = await (await fetch(aboutBoard)).text();
      const dataAboutCharter = await (await fetch(aboutCharter)).text();
      const dataAboutEvaluationCriteria = await (
        await fetch(aboutEvaluationCriteria)
      ).text();
      setData({
        aboutBoard: dataAboutBoard,
        aboutCharter: dataAboutCharter,
        aboutEvaluationCriteria: dataAboutEvaluationCriteria,
      });
    };
    loadData();
  }, []);

  return (
    <Box sx={{ mx: 4, my: 2 }}>
      <Container maxWidth='lg'>
        <Typography variant='h1' color='primary.main' component='a'>
          About COSA
        </Typography>
        <br />
        <br />
        <Typography variant='body1' color='primary.main' component='a'>
          The CDISC Open-Source Alliance (COSA) supports, promotes, and
          sometimes sponsors open-source software projects that create tools for
          implementing or developing CDISC standards to drive innovation in the
          CDISC community. COSA is directed by a Governance Board that evaluates
          projects for inclusion in the COSA Repository Directory, sets the
          project inclusion criteria, and determines what committees are needed
          to lead COSA activities. COSA activities may include communications or
          events like webinars, conference sessions, or hackathons. The
          Governance Board ensures the COSA vision and mission are realized -
          namely to support, promote, and sponsor open-source projects that
          drive innovation in the CDISC community. COSA also seeks to
          collaborate with other open-source initiatives with similar missions.
        </Typography>
        <br />
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography variant='h2'>COSA Charter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{data.aboutCharter}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography variant='h2'>COSA Inclusion Criteria</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{data.aboutEvaluationCriteria}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3a-content'
            id='panel3a-header'
          >
            <Typography variant='h2'>COSA Board</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{data.aboutBoard}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default About;
