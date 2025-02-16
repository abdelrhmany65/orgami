"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./howwork.module.css";
import Link from "next/link"; 

const HowWork = ({ title, description, imageSrc, altText, showLink, children, linkHref }) => { 
  const { t } = useTranslation();

  return (
    <motion.div
      className="col-md-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className={`rounded ${styles.cardhowwork}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t(title)}</h2>
          <motion.img 
            src={imageSrc} 
            alt={t(altText)} 
            className="z-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          />
        </div>
        <p className={styles.decvision}>{t(description)}</p>
        <div className={styles.overlayContent}>
          {showLink && linkHref && (
            <Link href={linkHref} className="BtnStyle231 z-2">
              <span>Read more</span>
            </Link>
          )}
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default HowWork;
