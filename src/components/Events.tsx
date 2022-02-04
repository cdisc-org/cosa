import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import ReactMarkdown from 'react-markdown';
import events from '../assets/events/events.json';

interface IEvent {
  logo?: string;
  description: string;
  date?: string;
}

const Events: React.FC = () => {
  const [data, setData] = useState<Array<IEvent>>([]);

  useEffect(() => {
    const loadEvents = async () => {
      const newData = [];
      for (let i = 0; i < events.length; i++) {
        const rawEvent: IEvent = events[0];
        const newEvent: IEvent = {} as IEvent;
        if (rawEvent.description) {
          newEvent.description = await import(
            `../assets/events/${rawEvent.description}`
          );
        }
        if (newEvent.description !== undefined) {
          newData.push(newEvent);
        }
      }
      setData(newData);
    };

    loadEvents();
  }, []);
  return (
    <Stack spacing={2}>
      {data.map((event) => (
        <ReactMarkdown>{event.description}</ReactMarkdown>
      ))}
    </Stack>
  );
};

export default Events;
