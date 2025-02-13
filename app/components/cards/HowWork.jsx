"use client";
import { useTranslation } from "react-i18next";
import styles from "./howwork.module.css";

const HowWork = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-2">
            <div className={`rounded ${styles.cardhowwork}`}>
                <div className={`d-flex justify-content-between align-items-center`}>
                <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}> {t("howWork.analysis.title")} </h2>
                <img src="/images/service__no__01.png" alt={t("howWork.analysis.title")} />
                </div>
                <p className={styles.decvision}>{t("howWork.analysis.description")}</p>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className={`rounded ${styles.cardhowwork}`}>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t("howWork.design.title")}</h2>
              <img src="/images/service__no__02.png" alt={t("howWork.design.title")} />
            </div>
            <p className={styles.decvision}>{t("howWork.design.description")}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-2">
          <div className={`rounded ${styles.cardhowwork}`}>
            <div className="d-flex justify-content-between align-items-center">
            <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t("howWork.development.title")}</h2>
              <img src="/images/service__no__03.png" alt={t("howWork.development.title")} />
            </div>
            <p className={styles.decvision}>{t("howWork.development.description")}</p>
            </div>
          </div>
          <div className="col-md-6 my-2">
          <div className={`rounded ${styles.cardhowwork}`}>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className={`mb-4 fw-bold ${styles.TitleHOw}`}>{t("howWork.deliverySupport.title")}</h2>
              <img src="/images/service__no__04.png" alt={t("howWork.deliverySupport.title")} />
            </div>
            <p className={styles.decvision}>{t("howWork.deliverySupport.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
