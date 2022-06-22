import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Field from './Field';
import { IProject } from '../../interfaces/common.d';

const fields: {
  projectInfo: Array<{
    id: keyof IProject['projectInfo'];
    multiline?: boolean;
    multiple?: boolean;
    freeSolo?: boolean;
    flag?: boolean;
    options?: Array<string>;
  }>;
  detailedDescription: Array<{
    id: keyof IProject['detailedDescription'];
    multiline?: boolean;
    multiple?: boolean;
    freeSolo?: boolean;
    flag?: boolean;
    options?: Array<string>;
  }>;
} = {
  projectInfo: [
    { id: 'projectName' },
    { id: 'projectOwner' },
    { id: 'projectContact' },
    { id: 'projectLandingPage' },
    { id: 'projectRepository' },
    {
      id: 'programmingLanguage',
      options: ['Python', 'SAS', 'R', 'Java', 'JavaScript'],
      freeSolo: true,
      multiple: true,
    },
    {
      id: 'openSourceLicense',
      options: [
        'MIT',
        'Apache-2.0',
        'BSD-2-Clause',
        'BSD-3-Clause',
        'GPL-2.0',
        'LGPL-2.1',
        'GPL-3.0',
        'AGPL-3.0',
        'LGPL-3.0',
      ],
      freeSolo: true,
      multiple: true,
    },
    {
      id: 'cdiscStandards',
      options: [
        'ADaM',
        'SDTM',
        'SEND',
        'CDASH',
        'ODM',
        'Define-XML',
        'NCI/CDISC CT',
        'Dataset-XML',
      ],
      freeSolo: true,
      multiple: true,
    },
    { id: 'agreeWithCdiscCodeOfEthics', flag: true },
    {
      id: 'projectMaturity',
      options: ['Stable', 'Development', 'Deprecated'],
      freeSolo: true,
    },
    {
      id: 'user',
      options: [
        'Data Manager',
        'Programmer',
        'Biostatistician',
        'Study Designer',
        'Medical Writer',
      ],
      freeSolo: true,
      multiple: true,
    },
    { id: 'logoUrl' },
  ],
  detailedDescription: [
    { id: 'problem', multiline: true },
    { id: 'solution', multiline: true },
    { id: 'openSourceConsiderations', multiline: true },
    { id: 'maintenanceModel', multiline: true },
    { id: 'projectSize', multiline: true },
    { id: 'contributors', multiline: true },
    { id: 'users', multiline: true },
    { id: 'preRequisites', multiline: true },
    { id: 'projectServiceOptions', multiline: true },
    { id: 'sponsors', multiline: true },
    { id: 'goalsObjectives', multiline: true },
    { id: 'communications', multiline: true },
    { id: 'additonalInformation', multiline: true },
  ],
};

interface IBodyProps {
  project: IProject;
  onChange: (name: string, value: string | boolean | Array<string>) => void;
}

const Body: React.FC<IBodyProps> = ({ project, onChange }: IBodyProps) => {
  return (
    <Stack direction='row' sx={{ flex: '1', m: 2 }} spacing={8}>
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
      <Stack spacing={1} sx={{ flex: '1 1 25%' }}>
        <Typography variant='h3' sx={{ mb: 4 }}>
          Project Information
        </Typography>
        {fields.projectInfo.map((field) => (
          <Field
            key={field.id}
            id={`project.projectInfo.${field.id}`}
            value={project.projectInfo[field.id]}
            onChange={onChange}
            multiline={field.multiline}
            options={field.options}
            flag={field.flag}
            freeSolo={field.freeSolo}
            multiple={field.multiple}
          />
        ))}
      </Stack>
      <Stack spacing={1} sx={{ flex: '1 1 75%' }}>
        <Typography variant='h3' sx={{ mb: 4 }}>
          Detailed Description
        </Typography>
        {fields.detailedDescription.map((field) => (
          <Field
            key={field.id}
            id={`project.detailedDescription.${field.id}`}
            value={project.detailedDescription[field.id]}
            onChange={onChange}
            multiline={field.multiline}
            options={field.options}
            flag={field.flag}
            freeSolo={field.freeSolo}
            multiple={field.multiple}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Body;
