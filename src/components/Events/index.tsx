import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Markdown from '../../utils/Markdown';
import events from '../../assets/events/events.json';
import { IEvent } from './index.d';
import EventsTimeline from './EventsTimeline';

const Events: React.FC = () => {
  const [data, setData] = useState<Array<IEvent>>([]);
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    const loadEvents = async () => {
      const newData = [];
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
    };

    loadEvents();
  }, []);

  // Show past or upcoming events depending on the tab
  const filteredData = data.filter((event) => (tab === 'past') === event.past);
  // For upcoming sort in ascending order
  // For past sort in descending order
  filteredData.sort(
    (event1, event2) =>
      (event1.startDate > event2.startDate ? 1 : -1) * (tab === 'past' ? -1 : 1)
  );

  return (
    <Stack spacing={2} sx={{ my: 2 }} divider={<Divider />}>
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
      <Stack direction='row' spacing={1} justifyContent='space-between'>
        <Stack spacing={6} divider={<Divider />}>
          {filteredData.map((event, index) => (
            <Stack spacing={4} key={index}>
              <Typography variant='h2' color='primary.main' component='a'>
                {event.title}
              </Typography>
              {event.logo !== undefined && (
                <Box justifyContent='flex-start' sx={{ display: 'flex' }}>
                  <Box
                    component='img'
                    src={event.logo}
                    sx={{ maxHeight: 200, borderRadius: 1, maxWidth: '100%' }}
                  />
                </Box>
              )}
              <Markdown>{event.description}</Markdown>
            </Stack>
          ))}
        </Stack>
        <EventsTimeline events={filteredData} />
      </Stack>
    </Stack>
  );
};

export default Events;
