import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import './styles/app.scss';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  hydrateRoot(container, 
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}
