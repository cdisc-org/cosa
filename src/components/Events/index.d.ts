export interface IEvent {
  title: string;
  type: 'webinar' | 'conference' | 'hackathon' | 'other';
  description: string;
  logo?: string;
  startDate: string;
  endDate?: string;
  past?: boolean;
}
