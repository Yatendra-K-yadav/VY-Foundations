import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Event from './Events';
import CampaignSection from './Campaign';
import EventSignupSection from './EventSignup';
import Home from './Home';
import Donate from './Donate';
import DonationsList from './DonationList';
import ContactPage from './Contact_us';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/campaign" element={<CampaignSection />} />
          <Route path="/signup" element={<EventSignupSection />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donatelist" element={<DonationsList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
