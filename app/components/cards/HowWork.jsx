"use client";
import { useTranslation } from "react-i18next";
import styles from "./howwork.module.css";
import Link from 'next/link'; 

const HowWork = ({ title, description, imageSrc, altText, showLink, children, linkHref }) => { 
  const { t } = useTranslation();

  return (
    <div className="col-md-6">
      <div className={`rounded ${styles.cardhowwork}`}>
        <div className={`d-flex justify-content-between align-items-center`}>
          <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t(title)}</h2>
          <img src={imageSrc} alt={t(altText)} className="z-2"/>
        </div>
        <p className={styles.decvision}>{t(description)}</p>
        <div className={styles.overlayContent}>
        {showLink && linkHref && (
            <Link href={linkHref} className="BtnStyle231 z-2"><span>Read more</span></Link>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
