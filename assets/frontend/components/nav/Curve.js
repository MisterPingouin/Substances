import React from "react";
import { motion } from "framer-motion";
import styles from "./style/style.module.scss";

export default function Index() {
  const windowHeight = window.innerHeight;
  const initialPath = `M100 0 L100 ${windowHeight} Q100 0 100 ${windowHeight}`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
