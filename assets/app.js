import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Home from "./frontend/pages/Home";
import Contact from "./frontend/pages/Contact";
import Formation from "./frontend/pages/Formation";
import Conseil from "./frontend/pages/Conseil";
import Atelier from "./frontend/pages/Atelier";
import ErrorPage from "./frontend/pages/ErrorPage";
import Login from "./frontend/pages/Login";
import Admin from "./frontend/pages/Admin";
import FormationAdmin from "./frontend/pages/FormationAdmin";
import ConseilAdmin from "./frontend/pages/ConseilAdmin";
import AtelierAdmin from "./frontend/pages/AtelierAdmin";
import AboutAdmin from "./frontend/pages/AboutAdmin";
import Logo from "./frontend/pages/LogoAdmin";
import About from "./frontend/pages/About";
import AvisAdmin from "./frontend/pages/AvisAdmin";
import Mention from "./frontend/pages/Mention";
import Plan from "./frontend/pages/Plan";
import "./styles/app.scss";

const App = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    const consentValue = getCookieConsentValue("userCookieConsent");
    if (consentValue === "false") {
      setShowConsent(false);
    }
  }, []);

  const handleDecline = () => {
    setShowConsent(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/conseil" element={<Conseil />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/about" element={<AboutAdmin />} />
        <Route path="/admin/avis" element={<AvisAdmin />} />
        <Route path="/admin/atelier" element={<AtelierAdmin />} />
        <Route path="/admin/conseil" element={<ConseilAdmin />} />
        <Route path="/admin/formation" element={<FormationAdmin />} />
        <Route path="/admin/logo" element={<Logo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {showConsent && (
        <CookieConsent
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="userCookieConsent"
          style={{ background: "#342A2C" }}
          buttonStyle={{ background: "#fabd43", marginLeft: "10px" }}
          declineButtonStyle={{
            background: "#808080",
            color: "#000",
            marginRight: "10px",
          }}
          enableDeclineButton
          onDecline={handleDecline}
          flipButtons
        >
          Nous utilisons des cookies pour améliorer l'expérience utilisateur.
        </CookieConsent>
      )}
    </Router>
  );
};

export default App;
