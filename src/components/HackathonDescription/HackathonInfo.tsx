import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IHackathon } from '../../interfaces/common';

const HackathonInfo: React.FC<{
  info: IHackathon['hackathonInfo'];
  id: string;
}> = ({ info, id }) => {
  return (
    <Stack spacing={2}>
      <Box
        component='img'
        sx={{ height: 80, width: 80 }}
        src={
          id === undefined
            ? require(`../../assets/images/cosaLogo.png`)
            : require(`../../assets/hackathons/${id}/logo.png`)
        }
      />
      <Typography variant='subtitle1' color='grey.600'>
        Dates
      </Typography>
      <Typography variant='body1' color='grey.800'>
        {info.dates}
      </Typography>
      <Typography variant='subtitle1' color='grey.600'>
        Description
      </Typography>
      <Typography variant='body1' color='grey.800'>
        {info.description}
      </Typography>
      <Typography variant='subtitle1' color='grey.600'>
        Page
      </Typography>
      <Link href={info.landingPage} target='_blank' rel='noopener'>
        {info.landingPage}
      </Link>
      <Typography variant='subtitle1' color='grey.600'>
        CDISC Standards
      </Typography>
      <Typography variant='body1' color='grey.800'>
        {(info.cdiscStandards as Array<string>).join(', ')}
      </Typography>
    </Stack>
  );
};

export default HackathonInfo;
