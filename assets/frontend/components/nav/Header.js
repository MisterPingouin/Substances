import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import styles from './style/style.module.scss';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowButton(false);
        setIsActive(false); // Cela ferme également le menu si ouvert
      } else {
        // Scrolling up
        setShowButton(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
