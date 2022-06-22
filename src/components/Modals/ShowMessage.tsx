/**
 * Modal used to add a new study
 * @packageDocumentation
 */
/* eslint-disable react/destructuring-assignment */
// Prop destruction is disabled for this file because this modal has different types of attributes
import React from 'react';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

interface IShowMessageProps {
  message: string;
  title: string;
  onClose: () => void;
}

const ShowMessage: React.FC<IShowMessageProps> = ({
  message,
  title,
  onClose,
}: IShowMessageProps) => {
  return (
    <Dialog open>
      <DialogTitle>
        <Stack
          spacing={1}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h3'>{title}</Typography>
          <IconButton color='default' onClick={onClose} size='medium'>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography variant='body1' sx={{ py: 2 }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Stack
          spacing={4}
          direction='row'
          justifyContent='space-around'
          sx={{ px: 2, pb: 2, width: '100%' }}
        >
          <Button
            key='cancel'
            variant='text'
            sx={{ minWidth: '150px' }}
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ShowMessage;
