import styles from './style/style.module.scss';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';


export default function Header() {


  const [isActive, setIsActive] = useState(false);


  return (

    <>

        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>

            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

        </div>

        <AnimatePresence mode="wait">

           {isActive && <Nav />}

       </AnimatePresence>

   </>

  )

}

