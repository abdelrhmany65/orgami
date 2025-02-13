"use client"
import { Aboutimage } from "../../utils/images/images";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./About.module.css";


const AboutCop = () => {

    const { t, i18n } = useTranslation();

  return (
    <div className={styles.mainabout}>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <h4> {t("AboutCop.title")} <div className={styles.underLine}></div></h4>
                <h1 className={`${i18n.language === "ar" ? "py-5" : "py-3"}`}>
                    {t("AboutCop.text")}
                </h1>
                <p className="pb-2 fw-normal w-75">
                    {t("AboutCop.paragraph")}
                </p>

                <ul className={`list list-unstyled px-0 ${i18n.language === "ar" ? "pb-3" : "pb-0"}`}>
                    <li className="py-2"><img src={Aboutimage.IconImage01} alt="" /> {t("AboutCop.listOne")} </li>
                    <li className="py-2"><img src={Aboutimage.IconImage02} alt="" /> {t("AboutCop.listTwo")} </li>
                    <li className="py-2"><img src={Aboutimage.IconImage03} alt="" /> {t("AboutCop.listThree")} </li>
                    
                </ul>
                <Link href="/about" className="BtnStyle231 my-3">
                    <span> {t("AboutCop.AboutCop_button")} </span>
                </Link>
            </div>

                <div className={`${styles.AboutCopImage} col-lg-6`}>
                    <div className="row">
                        <div className={styles.Aboutimages}>
                            <img src={Aboutimage.Aboutimage01} alt="" className={`${styles.Aboutimage01}`}/> 
                        </div>
                            <span className={`${styles.underLine03} d-none d-md-flex`}><img src={Aboutimage.Iconprize} alt="" srcSet=""/></span>
                            <span className={styles.underLine02}></span>
                            <img src={Aboutimage.Aboutimage03} alt="" className={styles.Aboutimage02}/> 
                            

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCop