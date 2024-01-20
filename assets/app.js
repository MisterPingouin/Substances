import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/pages/Home';
import Contact from './frontend/pages/Contact';
import ErrorPage from './frontend/pages/ErrorPage';
import './styles/app.scss';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
};

export default App;
