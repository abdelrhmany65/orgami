"use client";

import { useTranslation } from "react-i18next";
import { TestimonialCardData } from "../../utils/images/images";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div className={`container ${styles.customCarousel}`}>

      <div className="row">
        <h4>{t("testimonials.title")}</h4>
        <p className={styles.docT}>{t("testimonials.description")}</p>
      </div>

      <div className="row justify-content-center">
        <div
          id="testimonialCarousel"
          className={`carousel slide`}
          data-bs-ride="carousel"
        >
          
          <div className={`carousel-indicators ${styles.carouselIndicators}`}>
            {TestimonialCardData.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={`${index === 0 ? "active" : ""} bg-dark `}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          
          <div className={`carousel-inner py-5`}>
            {TestimonialCardData.map((testimonial, index) => (
              <div
                key={testimonial.key}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className={`text-center d-flex align-items-center flex-column ${styles.testimonialCard}`}>
                  <div className={styles.stars}>
                    {testimonial.rating.map((star, starIndex) => (
                      <img
                        key={starIndex}
                        src={star}
                        alt="star"
                        className={styles.imagstar}
                      />
                    ))}
                  </div>
                  <p className={`mb-4 text-center ${styles.deco}`}>{t(testimonial.descriptionKey)}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={testimonial.image}
                      className={styles.image}
                      alt={t(testimonial.nameKey)}
                    />
                    <h5 className="ms-3">{t(testimonial.nameKey)}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🟢 أزرار التحكم (Next & Prev) */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className={`carousel-control-prev-icon ${styles.controlIcon}`}
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className={`carousel-control-next-icon ${styles.controlIcon}`}
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
