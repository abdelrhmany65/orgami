"use client"
import { Whyimage } from "../../utils/images/images";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import styles from "./why.module.css";


const Why = () => {

    const { t } = useTranslation();

  return (
    <div className={styles.mainabout}>
        <div className="container">
            <div className="row">

                <div className={`${styles.whyImage} col-lg-6`}>
                    <div className="row">
                        <img src={Whyimage.Whyimage03} alt="" className={`${styles.Aboutimage01}`}/> 
                    </div>
                </div>

                <div className="col-lg-6">
                    <h4 className={styles.whysub}> {t("why.title")} <div className={styles.underLine}></div></h4>
                    <h1 className="py-4 w-75 text-white">
                        {t("why.text")}
                    </h1>
                    <p className="py-4 fw-normal w-75 text-white">
                        {t("why.paragraph")}
                    </p>

                    <div className={`d-flex align-items-center p-4 ${styles.seloution}`}>
                    {t("why.services", { returnObjects: true }).map((service, index) => (
                        <div key={index}>
                        <div className={`d-flex align-items-center gap-3`}>
                            <div>
                                <img src={Whyimage[`IconImage0${index + 1}`]} alt={service.title} className={`${styles.seloutionImage} p-2 rounded`} width={45} height={45}/>
                            </div>
                            <h4 className="text-light">{service.title}</h4>
                        </div>
                        <p className="fw-normal w-75 mt-3 text-light">{service.description}</p>
                        </div>
                    ))}
                    </div>

                    <Link href="/about" className="BtnStyle231 my-3">
                        <span> {t("why.why_button")} </span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Why