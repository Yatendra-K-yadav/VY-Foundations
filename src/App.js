import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Event from './Events';
import CampaignSection from './Campaign';
import EventSignupSection from './EventSignup';
import Home from './Home';
import Donate from './Donate';
import DonationsList from './DonationList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/campaign" element={<CampaignSection />} />
          <Route path="/signup" element={<EventSignupSection />} />
          <Route path="/events" element={<Event />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donatelist" element={<DonationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
