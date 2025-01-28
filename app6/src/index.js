import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18+
import './index.css';
import App from './App';

// Get the root element in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
