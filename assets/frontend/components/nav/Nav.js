import React, { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./style/style.module.scss";
import { menuSlide } from "./Anim";
import Curve from "./Curve";
import CustomLink from "./Link";

const navItems = [
  {
    title: "Acceuil",

    href: "/",
  },

  {
    title: "Faisons connaissance",

    href: "/about",
  },

  {
    title: "Ateliers",

    href: "/atelier",
  },

  {
    title: "Formation Produit",

    href: "/formation",
  },

  {
    title: "Conseil & Coaching",

    href: "/conseil",
  },

  {
    title: "Contact",

    href: "/contact",
  },
];

export default function Nav() {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(location.pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
          </div>
          {navItems.map((item, index) => (
            <CustomLink
              key={index}
              title={item.title}
              href={item.href}
              index={index}
              isActive={selectedIndicator === item.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>

      </div>
      <Curve />
    </motion.div>
  );
}
