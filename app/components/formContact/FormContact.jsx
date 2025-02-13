'use client';
import { useTranslation } from 'react-i18next';
import styles from './FormContact.module.css';
import Link from 'next/link';

const FormContact = () => {
  const { t } = useTranslation();


  return (
    <div className={styles.formContainer}>
      <div className={styles.contactHero}>
        <div className="container py-5">
          <div className={styles.titleform} >
            <h4 className={styles.title}>{t("form.title")}</h4>
            <p className={styles.description}>{t("form.description")}</p>
          </div>
          <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
              <form className={styles.form}>
                <div className="mb-3">
                  <input type="text" placeholder={t("form.name_placeholder")} className={styles.inputField} />
                </div>
                <div className="mb-3">
                  
                  <input type="email" placeholder={t("form.email_placeholder")} className={styles.inputField} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder={t("form.subject_placeholder")} className={styles.inputField} />
                </div>
                <div className="mb-3">
                  
                  <textarea rows={4} placeholder={t("form.message_placeholder")} className={styles.textarea}></textarea>
                </div>
                
                <Link href="/contact" className="BtnStyle511 ">
                    <span>{t("form.submit_button")}</span>
                </Link>
              </form>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src="/images/contact.png" alt="Contact" className={styles.contactImage} />
            </div>
          </div>

          <div className="row mt-5">
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.2902976020328!2d39.664610599999996!3d24.440711600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfbcc19f31eb%3A0xadeaa4593bb58015!2z2K_ZitmD2YjYsdin2Kog2KfZhNi52LPZitmE2KfZhg!5e0!3m2!1sar!2seg!4v1736336717195!5m2!1sar!2seg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
