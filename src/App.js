import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CampaignSection from './Campaign';
import Home from './Home';
import DonationsList from './DonationList';
import ContactPage from './Contact_us';
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donatelist" element={
            <ProtectedRoute>
              <DonationsList />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
