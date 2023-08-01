import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import events from '../../assets/events/events.json';
import { IEvent } from './index.d';
import EventsTimeline from './EventsTimeline';
import Event from './Event';

const Events: React.FC = () => {
  const [data, setData] = useState<Array<IEvent>>([]);
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const loadEvents = async () => {
      const newData = [];
      setLoading(true);
      for (let i = 0; i < events.length; i++) {
        const rawEvent: IEvent = events[i] as IEvent;
        const newEvent: IEvent = {} as IEvent;
        newEvent.title = rawEvent.title;
        newEvent.type = rawEvent.type;
        newEvent.startDate = rawEvent.startDate;
        newEvent.endDate = rawEvent.endDate;

        if (
          new Date(new Date().toDateString()) >
          new Date(newEvent.endDate || newEvent.startDate)
        ) {
          newEvent.past = true;
        } else {
          newEvent.past = false;
        }

        // Load only events for the current tab
        if (
          !(
            (tab === 'upcoming' && newEvent.past === false) ||
            (tab === 'past' && newEvent.past === true)
          )
        ) {
          continue;
        }

        if (rawEvent.description) {
          const file = await import(
            `../../assets/events/${rawEvent.description}`
          );
          newEvent.description = await (await fetch(file.default)).text();
        }
        if (rawEvent.logo) {
          if (
            rawEvent.logo
              .trim()
              .toLowerCase()
              .match(/^http(s)?:\/\//)
          ) {
            // Link to an site, no need to load it
            newEvent.logo = rawEvent.logo;
          } else {
            newEvent.logo = await import(
              `../../assets/events/${rawEvent.logo}`
            );
          }
        }
        if (newEvent.description !== undefined) {
          newData.push(newEvent);
        }
      }
      setData(newData);
      setLoading(false);
    };

    loadEvents();
  }, [tab]);

  let filteredData;
  if (id !== undefined) {
    filteredData = data.filter((event) => id === event.title);
  } else {
    // If event is pre-specified, filter only it
    // Show past or upcoming events depending on the tab
    filteredData = data.filter((event) => (tab === 'past') === event.past);
    // For upcoming sort in ascending order
    // For past sort in descending order
    filteredData.sort(
      (event1, event2) =>
        (event1.startDate > event2.startDate ? 1 : -1) *
        (tab === 'past' ? -1 : 1)
    );
  }

  return (
    <Stack spacing={2} sx={{ my: 2 }} divider={<Divider />}>
      {id === undefined ? (
        <Tabs
          value={tab}
          onChange={(event, value) => {
            setTab(value);
          }}
          centered
        >
          <Tab label='Upcoming' value='upcoming' />
          <Tab label='Past' value='past' />
        </Tabs>
      ) : (
        <Breadcrumbs separator='›' sx={{ pb: 2 }}>
          <Link
            underline='hover'
            key='1'
            color='inherit'
            component={RouterLink}
            to={`/events`}
          >
            All Events
          </Link>
        </Breadcrumbs>
      )}
      {loading ? (
        <Box
          sx={{
            flex: '1 1 auto',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            minHeight: '50vh',
          }}
        >
          <CircularProgress size='60px' />
        </Box>
      ) : (
        <Stack direction='row' spacing={1} justifyContent='space-between'>
          <Stack spacing={6} divider={<Divider />}>
            {filteredData.map((event) => (
              <Event event={event} key={event.title} />
            ))}
          </Stack>
          {id === undefined && <EventsTimeline events={filteredData} />}
        </Stack>
      )}
    </Stack>
  );
};

export default Events;
