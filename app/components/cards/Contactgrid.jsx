'use client';

import { ContactGridImage } from '../../utils/images/images';
import { useTranslation } from "react-i18next";
import TopImage from '../../utils/topimage/TopImage';

import styles from "./contactgrid.module.css";

const Contactgrid = () => {
  
  const { t } = useTranslation();

  return (
    <>
    <TopImage title={t('contact_us.title')} />

    <div className={styles.maincontact}>
      <div className='container'>
        <div className="row g-4">
          {ContactGridImage.map((item, index) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.ContactCard}>
                <div className="d-flex justify-content-center">
                  <img
                    src={item.Contact_image}
                    alt={t(item.Contact_titleKey)}
                    className={styles.contactusImage}
                  />
                </div>
                <div className="text-center my-3 fw-bold">
                  {t(item.Contact_titleKey)}
                </div>
                <div className="text-center fw-bold ltr-text">
                  {t(item.Contact_textKey)}
                </div>
                <div className="text-center text-muted">
                  {t(item.additionalTextKey)}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactgrid;
