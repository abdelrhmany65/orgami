"use client"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Heroimage.module.css";

const Heroimage = () => {

    const { t, i18n } = useTranslation();
    const language = i18n.language;

  return (
    <div className={`${styles.HeroImage} d-flex position-relative`}>
        <div className="container">
        <div className={`${styles.contentHero}`}>
            <h5 className={`${styles.text03Hero}`}> {t("Hero.suptitle")} <div className={styles.underLine}></div> </h5> 
            
            <h1 className={`${styles.text01Hero} `}> {t("Hero.title")} </h1>
            
            <p className={`${styles.text02Hero} `}> {t("Hero.subtitle")} </p>
            
            <div className="d-flex align-items-center gap-3">
              <Link href="/contact" className="BtnStyle511">
                <span>{t("Hero.button")}</span>
              </Link>
              <Link href="/services" className="BtnStyle511">
                <span>{t("Hero.button02")}</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Heroimage