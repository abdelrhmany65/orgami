'use client'; 

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import Image from 'next/image';
import { topheaderimage } from '../../utils/images/images'; 
import styles from './header.module.css';

const TopHeader = () => {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);


  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
    setLanguage(lang);         
  };

  return (
    <div className={`${styles.topHeader} m-0`}>
      <div className="container-fluid">
        <div className="content-topheader d-flex justify-content-between align-items-center">
          {/* القسم الأيسر: معلومات التواصل */}
          <div className="left d-flex justify-content-between align-items-center">
            <div className={`${styles.ContentLeft} mx-2 .ltr-text`}>
              <a
                href="mailto:Ysser@OrigamiTechs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                
                <Image
                  width={15}
                  height={15}
                  src={topheaderimage.mail}
                  alt="mail"
                  className={styles.leftImg}
                />
                <span className={`${styles.textSpan} text-white`}>
                  {' '}Ysser@OrigamiTechs.com
                </span>

              </a>
            </div>
            <div className={`${styles.ContentLeft} .ltr-text`}>
              <a
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                
                <Image
                  width={15}
                  height={15}
                  src={topheaderimage.map_location}
                  alt="phone"
                  className={styles.leftImg}
                />
                <span className={`${styles.textSpan} text-white`}>
                  {' '}Al Medinha - Saudi Arabia
                </span>
                
              </a>
            </div>
          </div>

          {/* القسم الأيمن: dropdown اختيار اللغة */}
          <div className="right d-flex align-items-center justify-content-center">
            <div className="align-items-center justify-content-center">
              <div className="dropdown">
                <button
                  className="d-flex align-items-center border-0 bg-black text-light p-2"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === 'ar' ? t('Header.arabic') : t('Header.english')}
                  {/* أيقونة العلم */}
                  <span
                    className={`fi fis ${
                      language === 'ar' ? 'fi-sa' : 'fi-us'
                    } me-2 ms-2`}
                  ></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  <li onClick={() => handleLanguageChange('ar')}>
                    <button className="dropdown-item d-flex align-items-center">
                    {t('Header.arabic')}
                      <span className="fi fis fi-sa mx-2"></span>
                    </button>
                  </li>
                  <li onClick={() => handleLanguageChange('en')}>
                    <button className="dropdown-item d-flex align-items-center">
                      {t('Header.english')}
                      <span className="fi fis fi-us mx-2"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;