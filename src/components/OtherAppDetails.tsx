import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Markdown from '../utils/Markdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './css/general.css';
import applicationEmpty from '../assets/content/other_application_empty.md';
import applicationExample from '../assets/content/other_application_example.md';
import aboutEvaluationCriteria from '../assets/content/about_evaluation_criteria.md';
import applicationGuidance from '../assets/content/other_application_guidance.md';

const OtherFAQ: React.FC = () => {
  const [emtpy, setEmpty] = useState('');
  const [example, setExample] = useState('');
  const [evalCrit, setEvalCrit] = useState('');
  const [guidance, setGuidance] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const readData1 = await (await fetch(applicationEmpty)).text();
      const readData2 = await (await fetch(applicationExample)).text();
      const readData3 = await (await fetch(aboutEvaluationCriteria)).text();
      const readData4 = await (await fetch(applicationGuidance)).text();
      setEmpty(readData1);
      setExample(readData2);
      setEvalCrit(readData3);
      setGuidance(readData4);
    };
    loadData();
  }, []);

  return (
    <Box sx={{ mx: 4, my: 2 }}>
      <Container maxWidth='lg'>
        <Typography variant='h1' color='primary.main' component='a'>
          Requests
        </Typography>
        <br />
        <br />
        <Typography variant='body1' color='primary.main' component='a'>
          To apply for inclusion in the COSA Directory, please complete the
          application with all required information and return it to the email
          address listed in the application. Your application will be evaluated
          for possible inclusion into the COSA directory.
        </Typography>
        <br />
        <br />
        <Typography variant='body1' color='primary.main' component='a'>
          The COSA Governance Board evaluates each project against the inclusion
          criteria to determine if the project is a fit inclusion in the COSA
          Directory.
        </Typography>
        <br />
        <br />
        <Typography variant='h2' color='primary.main' component='a'>
          Make A Request
        </Typography>
        <br />
        <br />
        <Typography variant='body1' color='primary.main' component='a'>
          To request membership in the CDISC Open Source Alliance (COSA), please
          email a YAML file with the following information to cosa@cdisc.org.
          Either create the YAML file on your own or use the Application tool.
        </Typography>
        <br />
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography variant='h3'>
              COSA Membership Application YAML format
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{emtpy}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography variant='h3'>Application Guidance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{guidance}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography variant='h3'>
              Example COSA Membership Application YAML format
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{example}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3a-content'
            id='panel3a-header'
          >
            <Typography variant='h3'>COSA Inclusion Criteria</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className='markdownArea'>
              <Markdown>{evalCrit}</Markdown>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default OtherFAQ;
