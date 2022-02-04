import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IProject } from '../../interfaces/common.d';
import { labels, descriptions } from '../../constants/project';

interface IField {
  id: string;
  value: string | Array<string> | boolean;
  multiline?: boolean;
  freeSolo?: boolean;
  multiple?: boolean;
  flag?: boolean;
  options?: Array<string>;
  onChange: (name: string, value: string | boolean | Array<string>) => void;
}

const Field: React.FC<IField> = ({
  onChange,
  value,
  multiline,
  options,
  freeSolo,
  flag,
  multiple,
  id,
}: IField) => {
  const category = id.split('.')[1] as keyof IProject;
  const prop = id.split('.')[2] as
    | keyof IProject['projectInfo']
    | keyof IProject['detailedDescription'];

  const handleAutocompleteChange = (
    event: object,
    newValue: Array<string> | string | null
  ) => {
    onChange(id, newValue as Array<string>);
  };

  const handleFlagChange = () => {
    onChange(id, !value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.value);
  };

  return (
    <Stack spacing={1}>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Typography variant='h6' color='grey.700'>
          {(labels[category] as { [name: string]: string })[prop]}
        </Typography>
        <Tooltip
          title={(descriptions[category] as { [name: string]: string })[prop]}
        >
          <HelpOutlineIcon sx={{ color: 'primary.dark' }} />
        </Tooltip>
      </Stack>
      {flag && (
        <FormControlLabel
          control={
            <Checkbox
              checked={value as boolean}
              onChange={handleFlagChange}
              sx={{ width: 30 }}
            />
          }
          label='Agree'
        />
      )}
      {options !== undefined && (
        <Autocomplete
          value={value as string}
          options={options as Array<string>}
          freeSolo={freeSolo}
          multiple={multiple}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              multiline={multiline}
              name={id}
              InputProps={{
                ...params.InputProps,
                sx: { backgroundColor: 'white' },
              }}
            />
          )}
        />
      )}
      {!flag && options === undefined && (
        <TextField
          size='small'
          value={value}
          multiline={multiline}
          name={id}
          onChange={handleChange}
          InputProps={{ sx: { backgroundColor: 'white' } }}
        />
      )}
    </Stack>
  );
};

export default Field;
