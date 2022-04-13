import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App.js';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-4wdokf-s.us.auth0.com'
    clientId='Y4QBRzzTZ3x5DVSdETjP1UVHVNefAFR5'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
