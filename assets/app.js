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
import FormationAdmin from './frontend/pages/FormationAdmin';
import ConseilAdmin from './frontend/pages/ConseilAdmin';
import AtelierAdmin from './frontend/pages/AtelierAdmin';
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
          <Route path="/auth" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/atelier" element={<AtelierAdmin />} />
          <Route path="/admin/conseil" element={<ConseilAdmin />} />
          <Route path="/admin/formation" element={<FormationAdmin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
};

export default App;
