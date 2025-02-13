'use client';

import { ContactGridImage } from '../../utils/images/images';
import { useTranslation } from "react-i18next";
import TopImage from '../../utils/topimage/TopImage';

import styles from "./contactgrid.module.css";
const Contactgrid = () => {
  
  const { t } = useTranslation();

  return (
    <>
    <TopImage title={'contact us'} />

    <div className={styles.maincontact}>
    <div className='container'>
      <div className="row g-4">
        {ContactGridImage.map((item, index) => (
          <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
            <div className={`${styles.ContactCard} shadow-sm p-3 mb-5 bg-body-tertiary rounded`}>
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={item.Contact_image}
                    alt={t(item.Contact_titleKey)}
                    className={`${styles.contactusImage}`}
                  />
                </div>
                <div className="text-center my-3 fw-bold">
                  {t(item.Contact_titleKey)}
                </div>
                <div className="text-center fw-bold">
                    
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Contactgrid;