"use client";

import { Whyimage } from "../../utils/images/images";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./why.module.css";

const Why = ({ showButton = true }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.mainabout} style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row">
          {/* صورة الجانب الأيسر */}
          <motion.div
            className={`${styles.whyImage} col-lg-6`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="row">
              <motion.img
                src={Whyimage.Whyimage03}
                alt=""
                className={styles.Aboutimage01}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
              />
            </div>
          </motion.div>

          {/* نصوص الجانب الأيمن */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h4 className={styles.whysub}>
              {t("why.title")}
              <div className={styles.underLine}></div>
            </h4>

            <h1 className={`py-4 text-white fs-2`}>{t("why.text")}</h1>
            <p className={`py-4 fw-normal text-white ${styles.whyText}`}>{t("why.paragraph")}</p>

            {/* قائمة الخدمات */}
            <motion.div
              className={`d-flex align-items-center p-4 ${styles.seloution}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {t("why.services", { returnObjects: true }).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <motion.img
                        src={Whyimage[`IconImage0${index + 1}`]}
                        alt={service.title}
                        className={`${styles.seloutionImage} p-2 rounded`}
                        width={45}
                        height={45}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: false }}
                      />
                    </div>
                    <h4 className="text-light">{service.title}</h4>
                  </div>
                  <p className="fw-normal w-75 mt-3 text-light">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {showButton ? (
            <div>
              <Link href="/about" className="BtnStyle231 my-3">
                <span>{t("why.why_button")}</span>
              </Link>
            </div>
          ) : (

            <div>

              <Link href="/contact" className="BtnStyle231 my-3">
                <span>{t("footer.contactUs")}</span>
              </Link>
            </div>

          )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Why;
