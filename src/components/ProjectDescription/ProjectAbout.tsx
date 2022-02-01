import React from 'react';
import ReactMarkdown from 'react-markdown';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IProject } from '../../interfaces/common.d';

const labels = {
  problem: 'Problem',
  solution: 'Solution',
  openSourceConsiderations: 'Open Source Considerations',
  maintenanceModel: 'Maintenance Model',
  projectSize: 'Project Size',
  contributors: 'Contributors',
  users: 'Users',
  preRequisites: 'Pre-Requisites',
  projectServiceOptions: 'Project Service Options',
  sponsors: 'Sponsors',
  goalsObjectives: 'Goals Objectives',
  communications: 'Communications',
  additonalInformation: 'Additonal Information',
};

interface IProjectAboutProps {
  description: IProject['description'];
  id: keyof IProject['description'];
}

const ProjectAbout: React.FC<IProjectAboutProps> = ({
  description,
  id,
}: IProjectAboutProps) => {
  if (description[id] === undefined) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <Typography variant='h6' color='grey.600'>
        {labels[id]}
      </Typography>
      <ReactMarkdown>{description[id]}</ReactMarkdown>
    </Stack>
  );
};

export default ProjectAbout;
