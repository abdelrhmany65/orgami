"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./FormContact.module.css";
import Link from "next/link";

const FormContact = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      style={{ overflow: "hidden" }}
    >
      <div className={styles.contactHero}>
        <div className="container py-5">
          <motion.div
            className={styles.titleform}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className={styles.title}>{t("form.title")}</h4>
            <p className={styles.description}>{t("form.description")}</p>
          </motion.div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <motion.form
                className={styles.form}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="text"
                    placeholder={t("form.name_placeholder")}
                    className={styles.inputField}
                  />
                </motion.div>
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="email"
                    placeholder={t("form.email_placeholder")}
                    className={styles.inputField}
                  />
                </motion.div>
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="text"
                    placeholder={t("form.subject_placeholder")}
                    className={styles.inputField}
                  />
                </motion.div>
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <textarea
                    rows={4}
                    placeholder={t("form.message_placeholder")}
                    className={styles.textarea}
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <button type="submit" className="BtnStyle511 border-0">
                    <span>

                      {t("form.submit_button")}
                    </span>
                  </button>
                </motion.div>
              </motion.form>
            </div>

            <motion.div
              className="col-lg-6 col-md-6 col-sm-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <img
                src="/images/contact.png"
                alt="Contact"
                className={styles.contactImage}
              />
            </motion.div>
          </div>

          <motion.div
            className="row mt-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FormContact;
