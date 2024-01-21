import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/pages/Home';
import Contact from './frontend/pages/Contact';
import Formation from './frontend/pages/Formation';
import Conseil from './frontend/pages/Conseil';
import Atelier from './frontend/pages/Atelier';
import ErrorPage from './frontend/pages/ErrorPage';
import Login from './frontend/pages/Login';
import Admin from './frontend/pages/Admin';
import './styles/app.scss';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/conseil" element={<Conseil />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
  );
};

export default App;
