import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import Markdown from '../utils/Markdown';
import aboutBoard from '../assets/content/about_board.md';
import aboutCharter from '../assets/content/about_charter.md';
import aboutEvaluationCriteria from '../assets/content/about_evaluation_criteria.md';

const About: React.FC = () => {
  const [data, setData] = useState<Array<{ title: string; text: string }>>([
    { title: 'COSA Charter', text: '' },
    { title: 'COSA Inclusion Criteria', text: '' },
    { title: 'COSA Board', text: '' },
  ]);

  useEffect(() => {
    const loadData = async () => {
      const dataAboutBoard = await (await fetch(aboutBoard)).text();
      const dataAboutCharter = await (await fetch(aboutCharter)).text();
      const dataAboutEvaluationCriteria = await (
        await fetch(aboutEvaluationCriteria)
      ).text();
      setData([
        { title: 'COSA Charter', text: dataAboutCharter },
        { title: 'COSA Inclusion Criteria', text: dataAboutEvaluationCriteria },
        { title: 'COSA Board', text: dataAboutBoard },
      ]);
    };
    loadData();
  }, []);

  return (
    <Stack sx={{ mx: 4, my: 2 }} spacing={2}>
      <Typography variant='h1'>About COSA</Typography>
      <Typography variant='body1'>
        The CDISC Open-Source Alliance (COSA) supports, promotes, and sometimes
        sponsors open-source software projects that create tools for
        implementing or developing CDISC standards to drive innovation in the
        CDISC community. COSA is directed by a Governance Board that evaluates
        projects for inclusion in the COSA Repository Directory, sets the
        project inclusion criteria, and determines what committees are needed to
        lead COSA activities. COSA activities may include communications or
        events like webinars, conference sessions, or hackathons. The Governance
        Board ensures the COSA vision and mission are realized - namely to
        support, promote, and sponsor open-source projects that drive innovation
        in the CDISC community. COSA also seeks to collaborate with other
        open-source initiatives with similar missions.
      </Typography>
      <Stack>
        {data.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h3'>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.text.length === 0 ? (
                <CircularProgress />
              ) : (
                <Markdown>{item.text}</Markdown>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};

export default About;
