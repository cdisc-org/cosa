import React from 'react';
import ReactMarkdown from 'react-markdown';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IProject } from '../../interfaces/common.d';
import { labels } from '../../constants/project';

interface IProjectAboutProps {
  description: IProject['detailedDescription'];
  id: keyof IProject['detailedDescription'];
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
        {labels.detailedDescription[id]}
      </Typography>
      <ReactMarkdown>{description[id]}</ReactMarkdown>
    </Stack>
  );
};

export default ProjectAbout;
