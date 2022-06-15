import React, { useState } from 'react';
import yaml from 'yaml';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Body from './Body';
import ProjectDescription from '../ProjectDescription';
import ShowMessage from '../Modals/ShowMessage';
import { IProject } from '../../interfaces/common';

const Editor: React.FC = () => {
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
      agreeWithCdiscCodeOfEthics: false,
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
  const [errorMessage, setErrorMessage] = useState('');

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
      try {
        const newProject = yaml.parse(await event.target.files[0].text());
        setProject(newProject);
      } catch (err) {
        setErrorMessage((err as Error).message);
      }
    }
  };

  const handleCloseError = () => {
    setErrorMessage('');
  };

  return (
    <>
      {errorMessage !== '' && (
        <ShowMessage
          message={`The YAML file has issues: ${errorMessage}`}
          title='Issues in YAML'
          onClose={handleCloseError}
        />
      )}
      <Stack spacing={2} sx={{ m: 4 }}>
        <Breadcrumbs separator='›' sx={{ pb: 2 }}>
          <Link
            underline='hover'
            key='1'
            color='inherit'
            component={RouterLink}
            to='/application'
          >
            Application
          </Link>
          <Link
            underline='hover'
            key='2'
            color='inherit'
            component={RouterLink}
            to='/application/editor'
          >
            Editor
          </Link>
        </Breadcrumbs>
        <Stack
          direction='row'
          spacing={4}
          alignItems='center'
          justifyContent='space-between'
          sx={{ pb: 4 }}
        >
          <Typography variant='h1'>Application Editor</Typography>
          <Stack direction='row' spacing={2}>
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
        </Stack>
        {preview ? (
          <ProjectDescription preloadedProject={project} />
        ) : (
          <Body onChange={handleChange} project={project} />
        )}
      </Stack>
    </>
  );
};

export default Editor;
