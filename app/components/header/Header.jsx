'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';               
import Image from 'next/image';             
import { usePathname } from 'next/navigation';    
import { useTranslation } from 'react-i18next'; 
import styles from './header.module.css';

import { headerimage } from '../../utils/images/images';

import TopHeader from './TopHeader';

const nav__link = [
  { path: '/', displayKey: 'home' },
  { path: '/about', displayKey: 'about' },
  // { path: '/projects', displayKey: 'projects' },
  { path: '/services', displayKey: 'services' },
  { path: '/contact', displayKey: 'contact' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const pathname = usePathname();

  const [offcanvasClass, setOffcanvasClass] = useState('');

  // تبديل حالة القائمة
  const handleToggleOffcanvas = () => {
    setOffcanvasClass(offcanvasClass ? '' : 'show');
  };

  // عند النقر على الروابط
  const handleLinkClick = () => {
    // البحث عن العنصر النشط للـ Offcanvas
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
  
    if (offcanvasInstance) {
      offcanvasInstance.hide(); // إغلاق الـ Offcanvas
    }
  };

  return (
    <div className='fixed-top'>
      <TopHeader />
      <header className={`${styles.header} `}>
        <nav className="navbar navbar-expand-lg m-0 p-0">
          <div className="container-fluid">
            {/** الشعار (اللوجو) */}
            <div className="navbar-brand">
              <Link href="/">
                {/* <Image
                  src={headerimage.LogoHeader} 
                  className={styles.headerLogo}
                  alt="logo"
                  width={110}
                  height={70}
                /> */}
                Logo
              </Link>
            </div>

            {/** زر التبديل للشاشات الصغيرة */}
            <button
              className="navbar-toggler d-lg-none bg-light my-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              onClick={handleToggleOffcanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/** القائمة في الشاشات الكبيرة */}
            <div
              className={`collapse navbar-collapse ${
                language === "ar" ? "flex-row-reverse" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul
                className={`navbar-nav mx-auto ${
                  language === "ar" ? "me-auto" : "ms-auto"
                } mb-1 mb-lg-0`}
              >
                {nav__link.map(({ path, displayKey }) => {
                  const isActive = pathname === path;
                  return (
                    <li key={path} className="nav__item px-3 fw-bold">
                      <Link
                        href={path}
                        className={`${
                          isActive ? 'nav__active' : ''
                        } ${styles.textStyle} text-dark fw-bold`}
                      >
                        {t(`Header.${displayKey}`)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={`d-none d-lg-flex ${styles.contactButton}`}>   
              <a
                  href="tel:+966 59 604 6900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-center "
              >
                  <img
                    src={headerimage.telephone}
                    alt="WhatsApp"
                    className={styles.headerTelephone}
                    style={{
                      width: "30px",
                      margin: "8px",
                      filter: "brightness(1) invert(0)",
                      background: "#fff",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  />
                    <div style={{padding:"5px" }}>
                      <h5 className='text-dark fw-bold text-center' style={{fontSize: "15px"}}>{t("Header.contact_us_whatss")}</h5>
                      <h5 className='text-dark fw-bold text-center ltr-text' style={{fontSize: "12px"}}>+966 59 604 6900</h5>
                    </div>
              </a>
          </div>
        </nav>
        

        {/** Offcanvas للشاشات الصغيرة */}
        <div
          className={`offcanvas ${offcanvasClass} ${styles.customOffcanvas} w-75 h-100`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div
            className={`offcanvas-header ${
              language === "ar" ? "flex-row-reverse" : ""
            } mt-4 px-3 d-md-flex d-lg-none`}
          >
            <Link href="/" className="offcanvas-title text-light m-0">
              {/* <Image
                src={headerimage.LogoHeader}
                width={80}
                height={80}
                alt="logo"
                className={`${styles.headerLogo} ${
                  language === "ar" ? "ms-auto" : "me-auto"
                }`}
              /> */}
              Logo
            </Link>
            <button
              type="button"
              className={`btn-close bg-light`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={handleToggleOffcanvas}
            ></button>
          </div>

          <div className={`offcanvas-body mt-2 ${styles.offcanvasBodyCustom}`}>
            <ul className="navbar-nav p-0">
              {nav__link.map(({ path, displayKey }) => {
                const isActive = pathname === path;
                return (
                  <li
                    key={path}
                    className="nav__item py-3 border-bottom fw-bold"
                  >
                    <Link
                      href={path}
                      className={`${
                        isActive ? 'nav__active' : ''
                      } ${styles.textStyle} ${styles.smtextStyle} text-light fw-bold`}
                      onClick={handleLinkClick} 
                    >
                      {t(`Header.${displayKey}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* socialIcons */}
        <div className={`icons-right ${styles.socialIcons}`}>
          
          
              {/* <a
                  href="tel:+966 59 604 6900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-flex align-items-cente"
              >
                  <img src={headerimage.phone2} alt="WhatsApp"/>
              </a> */}
          
 
          <a
            // href="https://wa.me/966543044442"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img src={headerimage.whatsappSVG} alt="whatsapp" className={styles.rightBox} />
          </a>

          {/* <a
            href="https://www.instagram.com/al_osseilan/?igsh=MWJ5cXI4cDNsZDdrMw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <img src={headerimage.insta} alt="instagram" className={styles.rightBox} />
          </a> */}

        </div>  

      </header>
    </div>
  );
};

export default Header;



