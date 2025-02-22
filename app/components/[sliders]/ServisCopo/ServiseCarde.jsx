'use client';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./ServisCopo.module.css"; 


const ServiseCarde = ({ title, description, imag, icon }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imag} alt={t(title)} />
      </div>
      <div className={styles.cardContent}>
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.imagesIcon}>
            <Image src={icon} alt={t(title)} width={40} height={40} />
          </div>
          <h3>{t(title)}</h3>
        </div>
        <p className="py-3 fw-bold">{t(description)}</p>
      </div>
    </div>
  );
};

export default ServiseCarde;
