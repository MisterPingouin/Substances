import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import styles from './style/style.module.scss';
import logo from '../../../images/logo.svg';
import backgroundImage from '../../../images/FormeHeader.svg'; 
import { Link } from 'react-router-dom'; 

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex justify-between pl-4 m-2 items-center'>
      <Link to="/">
        <img src={logo} alt="Logo" className="h-36 pt-10 ml-24"/>
      </Link>
      {showButton && (
        <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      )}

      <div className="absolute  right-0 top-0 ">
        <img src={backgroundImage} alt="Background" className="h-[20rem] " /> 
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </div>
  );
}
