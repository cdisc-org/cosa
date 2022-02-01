import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ApplicationField from './ApplicationField';
import { IProject } from '../../interfaces/common.d';

const ProjectDescription: React.FC = () => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.name.split('.')[1] as keyof IProject;
    const prop = event.target.name.split('.')[2] as
      | keyof IProject['projectInfo']
      | keyof IProject['detailedDescription'];
    const newProject: IProject = {
      ...project,
      [category]: { ...project[category], [prop]: event.target.value },
    };

    setProject(newProject);
  };

  return (
    <Stack spacing={2} sx={{ m: 4 }}>
      <Typography variant='h3' color='grey.700' sx={{ mb: 4 }}>
        Application Creator
      </Typography>
      <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
        <Stack spacing={1} sx={{ flex: '1 1 25%' }}>
          <Typography variant='h4' color='grey.700' sx={{ mb: 4 }}>
            Project Information
          </Typography>
          <ApplicationField
            id='project.projectInfo.projectName'
            value={project.projectInfo.projectName}
            description='Name of the project'
            onChange={handleChange}
          />
          <ApplicationField
            id='project.projectInfo.projectOwner'
            value={project.projectInfo.projectOwner}
            description='Name of the project owner'
            onChange={handleChange}
          />
          <ApplicationField
            id='project.projectInfo.projectContact'
            value={project.projectInfo.projectContact}
            description='Details about field'
            onChange={handleChange}
          />
        </Stack>
        <Stack spacing={1} sx={{ flex: '1 1 75%' }}>
          <Typography variant='h4' color='grey.700' sx={{ mb: 4 }}>
            Detailed Description
          </Typography>
          <ApplicationField
            id='project.detailedDescription.problem'
            value={project.detailedDescription.problem}
            multiline
            description='Describe the problem this software solves for your users'
            onChange={handleChange}
          />
          <ApplicationField
            id='project.detailedDescription.solution'
            value={project.detailedDescription.solution}
            multiline
            description='Details about field'
            onChange={handleChange}
          />
          <ApplicationField
            id='project.detailedDescription.openSourceConsiderations'
            value={project.detailedDescription.openSourceConsiderations}
            multiline
            description='Details about field'
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectDescription;
