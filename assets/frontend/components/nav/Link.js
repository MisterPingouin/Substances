import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import styles from './style/style.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from './Anim'; 

export default function CustomLink({ title, href, index, isActive, setSelectedIndicator }) {
  return (
    <motion.div 
      className={styles.link} 
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div 
        variants={scale} 
        animate={isActive ? "open" : "closed"} 
        className={styles.indicator}
      ></motion.div>
      <RouterLink to={href}>{title}</RouterLink> 
    </motion.div>
  );
}
