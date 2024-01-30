import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import styles from './style/style.module.scss';
import logo from '../../../images/logo.svg';
import backgroundImage from '../../../images/FormeHeader.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Durée de l'animation (en millisecondes)
  const animationDuration = 1000
  const toggleMenu = () => {
    if (!isActive) {
      setIsActive(true);
      setIsOverlayActive(true);
    } else {
      setIsActive(false);
      setTimeout(() => setIsOverlayActive(false), animationDuration);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isActive) {
        setShowButton(window.scrollY < 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive]);

  const overlayStyle = isOverlayActive ? styles.overlayActive : "";

  return (
    <div className={`flex justify-between pl-4 ml-22 items-center relative z-95 ${overlayStyle}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="h-28 mt-12 ml-24 pl-4 pt-2"/>
      </Link>
      {showButton && (
        <div onClick={toggleMenu} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      )}

      <div className="absolute right-0 top-0 ">
        <img src={backgroundImage} alt="Background" className="h-[20rem] " />
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </div>
  );
}
