import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GroupsIcon from '@mui/icons-material/Groups';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import Typography from '@mui/material/Typography';
import { IEvent } from './index.d';

interface ITimelineProps {
  events: Array<IEvent>;
}

const EventsTimeline: React.FC<ITimelineProps> = ({
  events,
}: ITimelineProps) => {
  return (
    <Timeline position='alternate'>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0', width: 180 }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            <Typography noWrap>{event.startDate}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            {event.type === 'webinar' && (
              <TimelineDot>
                <ContactPhoneIcon sx={{ color: 'primary.main' }} />
              </TimelineDot>
            )}
            {event.type === 'hackathon' && (
              <TimelineDot color='primary'>
                <ConstructionIcon />
              </TimelineDot>
            )}
            {event.type === 'conference' && (
              <TimelineDot>
                <GroupsIcon sx={{ color: 'primary.main' }} />
              </TimelineDot>
            )}
            {event.type === 'other' && (
              <TimelineDot>
                <SupervisedUserCircleOutlinedIcon
                  sx={{ color: 'primary.main' }}
                />
              </TimelineDot>
            )}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, width: 180 }}>
            <Typography
              variant='h4'
              component='span'
              color='grey.800'
              sx={{
                textTransform: 'capitalize',
                fontWeight: 500,
              }}
            >
              {event.type}
            </Typography>
            <Typography>{event.title}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default EventsTimeline;
