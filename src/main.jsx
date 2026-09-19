import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initDeveloperModeBlocker } from './utils/security';

// Disable developer mode, right click context menu, and inspect element
initDeveloperModeBlocker();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
