import React, { useState } from 'react';
import yaml from 'yaml';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Body from './Body';
import ProjectDescription from '../ProjectDescription';
import { IProject } from '../../interfaces/common.d';
import Container from '@mui/material/Container';

const Application: React.FC = () => {
  const [project, setProject] = useState<IProject>({
    projectInfo: {
      projectName: '',
      projectOwner: '',
      projectContact: '',
      projectLandingPage: '',
      projectRepository: '',
      programmingLanguage: [],
      openSourceLicense: [],
      cdiscStandards: [],
      agreeWithCdiscCodeOfEthics: true,
      projectMaturity: '',
      user: [],
      logoUrl: '',
    },
    detailedDescription: {
      problem: '',
      solution: '',
      openSourceConsiderations: '',
      maintenanceModel: '',
      projectSize: '',
      contributors: '',
      users: '',
      preRequisites: '',
      projectServiceOptions: '',
      sponsors: '',
      goalsObjectives: '',
      communications: '',
      additonalInformation: '',
    },
  });

  const [preview, setPreview] = useState(false);

  const handleChange = (
    name: string,
    value: string | boolean | Array<string>
  ) => {
    const category = name.split('.')[1] as keyof IProject;
    const prop = name.split('.')[2] as
      | keyof IProject['projectInfo']
      | keyof IProject['detailedDescription'];
    const newProject: IProject = {
      ...project,
      [category]: { ...project[category], [prop]: value },
    };

    setProject(newProject);
  };

  const handleSave = () => {
    const element = document.createElement('a');
    const converted = yaml.stringify(project);
    const data = new Blob([converted], { type: 'text/yaml' });
    element.href = URL.createObjectURL(data);
    element.download = `${project.projectInfo.projectName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')}.yaml`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    element.remove();
  };

  const handleLoad = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && event.target.files.length > 0) {
      const newProject = yaml.parse(await event.target.files[0].text());
      setProject(newProject);
    }
  };

  return (
    <Container maxWidth='lg'>
      <Stack spacing={2} sx={{ m: 4 }}>
        <Stack
          direction='row'
          spacing={4}
          alignItems='center'
          justifyContent='flex-start'
          sx={{ mb: 4 }}
        >
          <Typography variant='h3' color='grey.700'>
            Application Creator
          </Typography>
          <Button
            variant='contained'
            onClick={handleSave}
            sx={{ width: 100, height: 40 }}
          >
            Save
          </Button>
          <Button
            variant='contained'
            sx={{ width: 100, height: 40 }}
            component='label'
          >
            Load
            <input type='file' hidden onChange={handleLoad} />
          </Button>
          <Button
            variant='contained'
            sx={{ width: 100, height: 40 }}
            onClick={() => {
              setPreview(!preview);
            }}
          >
            {preview ? 'Edit' : 'Preview'}
          </Button>
        </Stack>
        {preview ? (
          <ProjectDescription preloadedProject={project} />
        ) : (
          <Body onChange={handleChange} project={project} />
        )}
      </Stack>
    </Container>
  );
};

export default Application;
