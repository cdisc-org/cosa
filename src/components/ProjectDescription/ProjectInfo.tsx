import React from 'react';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { IProject } from '../../common.d';

const labels = {
  projectName: 'Project Name',
  projectOwner: 'Project Owner',
  projectContact: 'Project Contact',
  projectLandingPage: 'Landing Page',
  projectRepository: 'Repository',
  programmingLanguage: 'Programming Language',
  openSourceLicense: 'Open Source License',
  cdiscStandards: 'CDISC Standards',
  agreeWithCdiscCodeOfEthics: 'Agree With CDISC Code Of Ethics',
  maturity: 'Maturity',
  user: 'User',
  logoUrl: 'LogoUrl',
};

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

  if (['projectLandingPage', 'projectRepository'].includes(id)) {
    type = 'link';
    href = projectInfo[id] as string;
    if (!href.toLowerCase().startsWith('http')) {
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
      <Typography variant='subtitle1' color='grey.500'>
        {labels[id]}
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
