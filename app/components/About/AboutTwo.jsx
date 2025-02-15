"use client"
import { useTranslation } from "react-i18next";
import TopImage from "../../utils/topimage/TopImage";
import AboutCop from "./About";
import styles from "./About.module.css";

const AboutTwo = () => {
    const { t, i18n } = useTranslation();

  return (
    <div>
        <TopImage title={t("AboutCop.title")} />
        <section className={styles.toptowsectopn}>

            <AboutCop />
        </section>
    </div>
  )
}

export default AboutTwo