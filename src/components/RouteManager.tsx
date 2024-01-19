import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Directory from './Directory';
import About from './About';
import Events from './Events';
import Media from './Media';
import Application from './Application';
import Editor from './Application/Editor';
import ProjectDescription from './ProjectDescription';
import OtherFAQ from './OtherFAQ';
import OtherOS from './OtherOS';
import OtherLicenses from './OtherLicenses';
import NotFound from './NotFound';
import HackathonDescription from './HackathonDescription';
import Hackathons from './Hackathons';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='' element={<Directory />} />
      <Route path='/' element={<Directory />} />
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Events />} />
      <Route path='/media' element={<Media />} />
      <Route path='/events/:id' element={<Events />} />
      <Route path='/application' element={<Application />} />
      <Route path='/application/editor' element={<Editor />} />
      <Route path='/directory' element={<Navigate to='/' />} />
      <Route path='/cosaDirectory' element={<Directory />} />
      <Route path='/directory/:id' element={<ProjectDescription />} />
      <Route path='/hackathons/' element={<Hackathons />} />
      <Route path='/hackathons/:id' element={<HackathonDescription />} />
      <Route
        path='/hackathons/:id/:projectId'
        element={<HackathonDescription />}
      />
      <Route path='/faq' element={<OtherFAQ />} />
      <Route path='/os' element={<OtherOS />} />
      <Route path='/licenses' element={<OtherLicenses />} />
      <Route path='/notfound' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
