"use client";

import { Aboutimage } from "../../utils/images/images";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const AboutCop = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.mainabout} style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h4>
              {t("AboutCop.title")} <div className={styles.underLine}></div>
            </h4>
            <h1 className={`${i18n.language === "ar" ? "py-5" : "py-3"}`}>
              {t("AboutCop.text")}
            </h1>
            <p className="pb-2 fw-normal w-75">{t("AboutCop.paragraph")}</p>

            <ul className={`list list-unstyled px-0 ${i18n.language === "ar" ? "pb-3" : "pb-0"}`}>
              <motion.li
                className="py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <img src={Aboutimage.IconImage01} alt="" /> {t("AboutCop.listOne")}
              </motion.li>
              <motion.li
                className="py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <img src={Aboutimage.IconImage02} alt="" /> {t("AboutCop.listTwo")}
              </motion.li>
              <motion.li
                className="py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
              >
                <img src={Aboutimage.IconImage03} alt="" /> {t("AboutCop.listThree")}
              </motion.li>
            </ul>

            <Link href="/about" className="BtnStyle231 my-3">
              <span>{t("AboutCop.AboutCop_button")}</span>
            </Link>
          </motion.div>

          <motion.div
            className={`${styles.AboutCopImage} col-lg-6`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="row">
              <div className={styles.Aboutimages}>
                <motion.img
                  src={Aboutimage.Aboutimage01}
                  alt=""
                  className={styles.Aboutimage01}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false }}
                />
              </div>

              <motion.span
                className={`${styles.underLine03} d-none d-md-flex`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <img src={Aboutimage.Iconprize} alt="" />
              </motion.span>

              <motion.span
                className={styles.underLine02}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
              ></motion.span>

              <motion.img
                src={Aboutimage.Aboutimage03}
                alt=""
                className={styles.Aboutimage02}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: false }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutCop;
