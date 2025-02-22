"use client";

import { useTranslation } from "react-i18next";
import styles from "./Vision.module.css";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container py-5">
        {/* قسم الرؤية */}
        <div className="row align-items-center mb-5 flex-md-row flex-column-reverse">
          <div className="col-md-6 col-sm-12">
            <div className={`rounded ${styles.cardvision}`}>
              <h1 className="mb-4 display-4 fw-bold">
                {t("vision.title")}
                <div className={styles.underLine}></div>
              </h1>
              <p className={styles.decvision}>{t("vision.description")}</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img 
              src="/images/2.9c8c509d3a5b7b56c8ac.png" 
              alt={t("vision.title")} 
              className={styles.visionImage02}
            />
          </div>
        </div>

        {/* قسم الرسالة */}
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 text-center">
            <img 
              src="/images/2.9c8c509d3a5b7b56c8ac.png" 
              alt={t("mission.title")} 
              className={styles.visionImage}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={`rounded ${styles.cardvision}`}>
              <h1 className="mb-4 display-4 fw-bold">
                {t("mission.title")}
                <div className={styles.underLine}></div>
              </h1>
              <p className={styles.decvision}>{t("mission.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
