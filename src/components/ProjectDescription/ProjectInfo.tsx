import React from 'react';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { IProject } from '../../interfaces/common.d';
import { labels } from '../../constants/project';

interface IProjectInfoProps {
  projectInfo: IProject['projectInfo'];
  id: keyof IProject['projectInfo'];
}

const ProjectInfo: React.FC<IProjectInfoProps> = ({
  projectInfo,
  id,
}: IProjectInfoProps) => {
  let type: 'link' | 'text' | 'array';
  let href = '';

  if (
    projectInfo[id] === undefined ||
    projectInfo[id] === '' ||
    (Array.isArray(projectInfo[id]) &&
      (projectInfo[id] as string[]).length === 0)
  ) {
    return null;
  }

  if (['projectLandingPage', 'projectRepository'].includes(id)) {
    type = 'link';
    href = projectInfo[id] as string;
    if (href && !href.toLowerCase().startsWith('http')) {
      href = `//${href}`;
    }
  } else if (
    [
      'user',
      'openSourceLicense',
      'programmingLanguage',
      'cdiscStandards',
    ].includes(id)
  ) {
    type = 'array';
  } else {
    type = 'text';
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle1' color='grey.600'>
        {labels.projectInfo[id]}
      </Typography>
      {type === 'link' && (
        <Link href={href} target='_blank' rel='noopener'>
          {projectInfo[id]}
        </Link>
      )}
      {type === 'array' && (
        <Typography variant='body1' color='grey.800'>
          {(projectInfo[id] as Array<string>).join(', ')}
        </Typography>
      )}
      {type === 'text' && (
        <Typography variant='body1' color='grey.800'>
          {projectInfo[id]}
        </Typography>
      )}
    </Stack>
  );
};

export default ProjectInfo;
