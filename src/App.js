import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Event from './Events';
import CampaignSection from './Campaign';
import EventSignupSection from './EventSignup';
import Home from './Home';
import Donate from './Donate';
import DonationsList from './DonationList';
import ContactPage from './Contact_us';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated } = useAuth0();

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated || user?.name !== "Vrishank Warrier") {
      alert("Only Admins can Login");
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/campaign" element={<CampaignSection />} />
          <Route path="/signup" element={<EventSignupSection />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/event" element={<EventSignupSection />} />
          <Route path="/donatelist" element={
            <ProtectedRoute>
              <DonationsList />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
