'use client';

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { footerimage, headerimage } from "../../utils/images/images";
import styles from "./footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={`Subscribe ${styles.sub}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-around py-4">
            <h3 className="text-light">{t("footer.subDescription")}</h3>
            <Link href="/" className="BtnStyle511 p-2">
              <span>{t("footer.contactUs")}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-12 text-center">
              <h2>Logo</h2>
              <p className="px-3">{t("footer.description")}</p>
              <div className={`${styles.socialIcons} d-flex justify-content-center`}>
                  {/* <a
                    href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={footerimage.face} alt="facebook" />
                  </a> */}

                  <a
                    href="tel:+966596046900"
                    className="text-decoration-none d-flex align-items-center"
                  >
                    <img src={headerimage.phone2} alt="Phone" />
                  </a>

                  <a
                    href="https://wa.me/966596046900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={footerimage.watsap} alt="WhatsApp" />
                  </a>

                  {/* <a
                    href="https://www.instagram.com/YOUR_INSTAGRAM_ACCOUNT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={footerimage.instagr} alt="Instagram" />
                  </a> */}

                  <a
                    href="https://www.linkedin.com/in/yasser-baghdadi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={footerimage.linkedin} alt="LinkedIn" />
                  </a>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h3>{t("footer.company")}</h3>
              <ul>
                <li><Link href="/about">{t("footer.about")}</Link></li>
                <li><Link href="/services">{t("footer.services")}</Link></li>
                {/* <li><Link href="/projects">{t("footer.projects")}</Link></li> */}
                <li><Link href="/contact">{t("footer.contact")}</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h3>{t("footer.helpSupport")}</h3>
              <ul>
                <li><Link href="/faq">{t("footer.faq")}</Link></li>
                <li><Link href="/contact">{t("footer.contact")}</Link></li>
                <li><Link href="/terms">{t("footer.terms")}</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h3>{t("footer.contactUs")}</h3>
              <div className={`${styles.ContentLeft} py-2 d-flex justify-content-center`}>
                <a href="mailto:Ysser@OrigamiTechs.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <img src={footerimage.mail} className={styles.leftImg}/>
                  <span className={`${styles.textSpan}`}> Ysser@OrigamiTechs.com</span>
                </a>
              </div>
              <div className={`${styles.ContentLeft} d-flex justify-content-center`}>
                <a rel="noopener noreferrer">
                  <img src={footerimage.map_location} alt="location" className={styles.leftImg} />
                  <span className={styles.textSpan}>{t("footer.location")}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-dark">
  <div className="container text-center py-1">
    <p
      className="m-0 text-light"
      dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
    />
  </div>
</div>


    </footer>
  );
};

export default Footer;
