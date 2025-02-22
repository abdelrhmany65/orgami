
// ServisCopo.js
"use client";
import Slider from "react-slick";
import ServiseCarde from "./ServiseCarde";
import { serviceImages } from "../../../utils/images/images"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServisCopo.module.css";
import { useTranslation } from "react-i18next";

const ServisCopo = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div style={{ overflowX: "hidden" }} className={styles.serviceslider}>
      <div className={`${styles.pageserviceslider} container mx-auto my-5`}>
        <div>
          <h4 className="text-center mb-4"> {t("service_card.title")} </h4>
          <p className="text-center">{t("service_card.text")}</p>
        </div>
        <div>
          <Slider {...sliderSettings}>
            {serviceImages.map((card, index) => (
              <div key={index}>
                <ServiseCarde key={index} 
                  imag={card.image}
                  title={t(card.titleKey)}
                  description={t(card.textKey)}
                  icon={card.icon}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServisCopo;
