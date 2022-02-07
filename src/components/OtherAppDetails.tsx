import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Markdown from '../utils/Markdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import applicationEmpty from '../assets/content/other_application_empty.md';
import applicationExample from '../assets/content/other_application_example.md';
import aboutEvaluationCriteria from '../assets/content/about_evaluation_criteria.md';
import applicationGuidance from '../assets/content/other_application_guidance.md';

const OtherFAQ: React.FC = () => {
  const [data, setData] = useState<Array<{ title: string; text: string }>>([]);

  useEffect(() => {
    const loadData = async () => {
      const readData1 = await (await fetch(applicationEmpty)).text();
      const readData2 = await (await fetch(applicationExample)).text();
      const readData3 = await (await fetch(aboutEvaluationCriteria)).text();
      const readData4 = await (await fetch(applicationGuidance)).text();
      setData([
        { title: 'COSA Membership Application YAML format', text: readData1 },
        { title: 'Application Guidance', text: readData2 },
        {
          title: 'Example COSA Membership Application YAML format',
          text: readData3,
        },
        { title: 'COSA Inclusion Criteria', text: readData4 },
      ]);
    };
    loadData();
  }, []);

  return (
    <Stack sx={{ mx: 4, my: 2 }} spacing={2}>
      <Typography variant='h1'>Requests</Typography>
      <Typography variant='body1'>
        To apply for inclusion in the COSA Directory, please complete the
        application with all required information and return it to the email
        address listed in the application. Your application will be evaluated
        for possible inclusion into the COSA directory.
      </Typography>
      <Typography variant='body1'>
        The COSA Governance Board evaluates each project against the inclusion
        criteria to determine if the project is a fit inclusion in the COSA
        Directory.
      </Typography>
      <Typography variant='h2'>Make A Request</Typography>
      <Typography variant='body1'>
        To request membership in the CDISC Open Source Alliance (COSA), please
        email a YAML file with the following information to cosa@cdisc.org.
        Either create the YAML file on your own or use the Application tool.
      </Typography>
      <Stack>
        {data.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h3'>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Markdown>{item.text}</Markdown>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};

export default OtherFAQ;
