import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import Markdown from '../../utils/Markdown';
import applicationEmpty from '../../assets/content/other_application_empty.md';
import applicationExample from '../../assets/content/other_application_example.md';
import aboutEvaluationCriteria from '../../assets/content/about_evaluation_criteria.md';
import applicationGuidance from '../../assets/content/other_application_guidance.md';
import yamlApplicationEmpty from '../../assets/content/application_empty.yaml';
import yamlApplicationExample from '../../assets/content/application_example.yaml';
import { IDownloadFile } from '../../interfaces/common.d';

const Application: React.FC = () => {
  const [data, setData] = useState<Array<{ title: string; text: string }>>([
    { title: 'Application Guidance', text: '' },
    {
      title: 'COSA Membership Application YAML format',
      text: '',
    },
    {
      title: 'Example COSA Membership Application YAML format',
      text: '',
    },
    { title: 'COSA Inclusion Criteria', text: '' },
  ]);

  useEffect(() => {
    const loadData = async () => {
      const applicationEmptyText = await (await fetch(applicationEmpty)).text();
      const applicationExampleText = await (
        await fetch(applicationExample)
      ).text();
      const aboutEvaluationCriteriaText = await (
        await fetch(aboutEvaluationCriteria)
      ).text();
      const applicationGuidanceText = await (
        await fetch(applicationGuidance)
      ).text();
      setData([
        { title: 'Application Guidance', text: applicationGuidanceText },
        {
          title: 'COSA Membership Application YAML format',
          text: applicationEmptyText,
        },
        {
          title: 'Example COSA Membership Application YAML format',
          text: applicationExampleText,
        },
        { title: 'COSA Inclusion Criteria', text: aboutEvaluationCriteriaText },
      ]);
    };
    loadData();
  }, []);

  const downloadFiles: IDownloadFile[] = [
    {
      title: 'Template YAML',
      asset: yamlApplicationEmpty,
      name: 'cosa_application_empty.yaml',
    },
    {
      title: 'Example YAML',
      asset: yamlApplicationExample,
      name: 'cosa_application_example.yaml',
    },
  ];

  const downloadEmpty = async (item: IDownloadFile) => {
    const EmptyText = await (await fetch(item.asset)).text();
    const element = document.createElement('a');
    const file = new Blob([EmptyText], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = item.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    console.log('download clicked');
  };

  return (
    <Stack sx={{ mx: 4, my: 2 }} spacing={2}>
      <Breadcrumbs separator='›' sx={{ pb: 2 }}>
        <Link
          underline='hover'
          key='1'
          color='inherit'
          component={RouterLink}
          to='/'
        >
          Application
        </Link>
      </Breadcrumbs>
      <Typography variant='h1'>COSA Directory Application</Typography>
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
        Either create the YAML file on your own or use the Application Editor
        tool.
      </Typography>
      <Stack direction='row' spacing={2} sx={{ pb: 2 }}>
        <Button
          variant='contained'
          component={RouterLink}
          endIcon={<EditIcon />}
          to='/application/editor'
        >
          Application Editor
        </Button>
        {downloadFiles.map((item) => (
          <Button
            variant='contained'
            onClick={() => downloadEmpty(item)}
            endIcon={<DownloadIcon />}
            key={item.name}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
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

export default Application;
