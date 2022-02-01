import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IProject } from '../../interfaces/common.d';
import { labels } from '../../constants/project';

interface IApplicationField {
  id: string;
  value: string;
  multiline?: boolean;
  description: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplicationField: React.FC<IApplicationField> = ({
  onChange,
  value,
  multiline,
  description,
  id,
}: IApplicationField) => {
  const category = id.split('.')[1] as keyof IProject;
  const prop = id.split('.')[2] as
    | keyof IProject['projectInfo']
    | keyof IProject['detailedDescription'];
  return (
    <Stack spacing={1}>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Typography variant='h6' color='grey.700'>
          {(labels[category] as { [name: string]: string })[prop]}
        </Typography>
        <Tooltip title={description}>
          <HelpOutlineIcon sx={{ color: 'primary.dark' }} />
        </Tooltip>
      </Stack>
      <TextField
        size='small'
        value={value}
        multiline={multiline}
        name={id}
        onChange={onChange}
        InputProps={{ sx: { backgroundColor: 'white' } }}
      />
    </Stack>
  );
};

export default ApplicationField;
