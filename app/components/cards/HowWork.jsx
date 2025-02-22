'use client';

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import styles from './howwork.module.css';

const cardVariants = {
  offscreen: { y: -150, opacity: 0 },
  onscreen: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  }),
};

const HowWork = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.howworkhero}>
      {/* تخطيط / Planning */}
      <motion.div
        className={`${styles.cardsimage01} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.planningTitle')}</h2>
            <img src="icons/service/planing.svg" alt={t('howwork.planningTitle')}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.planningDescription')}
            </p>
            <img src="images/service__no__01.png" alt={t('howwork.planningTitle')} />
          </div>
        </div>
      </motion.div>

      {/* تصميم / Design */}
      <motion.div
        className={`${styles.cardsimage02} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.designTitle')}</h2>
            <img src="icons/service/design.svg" alt={t('howwork.designTitle')} width={60}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.designDescription')}
            </p>
            <img src="images/service__no__02.png" alt={t('howwork.designTitle')} className={styles.imagenuber}/>
          </div>
        </div>
      </motion.div>

      {/* تطوير / Development */}
      <motion.div
        className={`${styles.cardsimage03} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.developmentTitle')}</h2>
            <img src="icons/service/bulding.svg" alt={t('howwork.developmentTitle')} width={60}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.developmentDescription')}
            </p>
            <img src="images/service__no__03.png" alt={t('howwork.developmentTitle')} className={styles.imagenuber}/>
          </div>
        </div>
      </motion.div>

      {/* اختبار / Testing */}
      <motion.div
        className={`${styles.cardsimage04} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.testingTitle')}</h2>
            <img src="icons/service/stings.svg" alt={t('howwork.testingTitle')} width={60}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.testingDescription')}
            </p>
            <img src="images/service__no__04.png" alt={t('howwork.testingTitle')} className={styles.imagenuber}/>
          </div>
        </div>
      </motion.div>

      {/* ملاحظات / Notes */}
      <motion.div
        className={`${styles.cardsimage05} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={5}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.notesTitle')}</h2>
            <img src="icons/service/Group.svg" alt={t('howwork.notesTitle')} width={60}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.notesDescription')}
            </p>
            <img src="images/service__no__05.png" alt={t('howwork.notesTitle')} className={styles.imagenuber}/>
          </div>
        </div>
      </motion.div>

      {/* إصدار / Release */}
      <motion.div
        className={`${styles.cardsimage06} card`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        custom={6}
        variants={cardVariants}
      >
        <div className={`rounded ${styles.cardhowwork}`}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t('howwork.releaseTitle')}</h2>
            <img src="icons/service/platfor.svg" alt={t('howwork.releaseTitle')} width={60} className="bg-transparent"/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={styles.decvision}>
              {t('howwork.releaseDescription')}
            </p>
            <img src="images/service__no__06.png" alt={t('howwork.releaseTitle')} className={styles.imagenuber}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowWork;
