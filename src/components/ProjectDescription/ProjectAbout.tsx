import React from 'react';
import Markdown from '../../utils/Markdown';
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
    <Stack spacing={1} className='miniMarkdownArea'>
      <Typography variant='h3'>{labels.detailedDescription[id]}</Typography>
      <Markdown>{description[id]}</Markdown>
    </Stack>
  );
};

export default ProjectAbout;
