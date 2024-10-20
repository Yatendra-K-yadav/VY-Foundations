import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Event from './Events';
import CampaignSection from './Campaign';
import EventSignupSection from './EventSignup';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/campaign" element={<CampaignSection />} />
          <Route path="/signup" element={<EventSignupSection />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
