import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { Auth0provider} from  '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0provider 
    
    domain ="vy-foundations.us.auth0.com"
    clientId="LqkSsNoVWVfKsu5KWtGlrgpE4tlPVlId"
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0provider>
    
  </React.StrictMode>,
)
