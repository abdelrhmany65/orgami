'use client';

import { CardAboutImage } from '../../utils/images/images';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import styles from "./CardAbout.module.css";

const CardAbout = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cardAbout}>
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          {CardAboutImage.map((item, index) => (
            <div className={`col-12 col-md-6 col-lg-4 mx-auto`} key={index}>
              <div className={`${styles.cardsAbout} card shadow mx-auto`}>
                <div className="d-flex justify-content-center">
                  <Image
                    width={80}
                    height={80} 
                    src={item.CardAbout_icon} 
                    alt={t(item.CardAbout_titleKey)}    
                    className={`${styles.carsAboutImage} p-3`} 
                  />
                </div>
                <div className="card-body ">
                  <h5 className={`text-center my-3 p-2 ${styles.CardAboutTitle}`}>
                    {t(item.CardAbout_textKey)}
                  </h5>
                  <p className={`text-center ${styles.CardAboutText}`}>
                    {t(item.CardAbout_titleKey)}
                  </p>
                </div>
                <div>
                <img 
                    src={item.CardAbout_image} 
                    alt={t(item.CardAbout_titleKey)}  
                    className={styles.carsAboutImage02} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardAbout;
