"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Heroimage.module.css";

const HeroImage = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  // تأثير تحريك النصوص بناءً على التمرير (لأعلى)
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      className={`${styles.HeroImage} d-flex align-items-center justify-content-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center mb-5 flex-md-row flex-column-reverse">
          <div className="col-md-6 col-sm-12">
            <motion.div className={styles.contentHero} style={{ y: yText }}>

              {/* ✅ العنوان الرئيسي يظهر من الأعلى */}
              <motion.h1
                className={styles.text01Hero}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t("Hero.title")}
              </motion.h1>

              {/* ✅ الفقرة تظهر من الأسفل */}
              <motion.p
                className={styles.text02Hero}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t("Hero.subtitle")}
              </motion.p>

              {/* ✅ الأزرار تظهر بتأثير سلسٍ */}
              <motion.div
                className="d-flex align-items-center justify-content-center gap-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link href="/contact" className="BtnStyle511">
                    <span>{t("Hero.button")}</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link href="/services" className="BtnStyle511">
                    <span>{t("Hero.button02")}</span>
                  </Link>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
