// "use client";

// import { useTranslation } from "react-i18next";
// import { TestimonialCardData } from "../../utils/images/images";
// import { motion } from "framer-motion";
// import styles from "./Testimonial.module.css";

// const Testimonial = () => {
//   const { t } = useTranslation();

//   return (
//     <motion.div
//       className={`container ${styles.customCarousel}`}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: false }}
//       style={{ overflow: "hidden" }}
//     >
//       <div className="row">
//         <h4>{t("testimonials.title")}</h4>
//         <p className={styles.docT}>{t("testimonials.description")}</p>
//       </div>

//       <div className="row justify-content-center">
//         <div
//           id="testimonialCarousel"
//           className={`carousel slide`}
//           data-bs-ride="carousel"
//         >
//           <div className={`carousel-indicators ${styles.carouselIndicators}`}>
//             {TestimonialCardData.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 data-bs-target="#testimonialCarousel"
//                 data-bs-slide-to={index}
//                 className={`${index === 0 ? "active" : ""} bg-dark`}
//                 aria-label={`Slide ${index + 1}`}
//               ></button>
//             ))}
//           </div>

//           <div className={`carousel-inner py-5`}>
//             {TestimonialCardData.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.key}
//                 className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: false }}
//               >
//                 <div
//                   className={`text-center d-flex align-items-center flex-column ${styles.testimonialCard}`}
//                 >
//                   <motion.div
//                     className={styles.stars}
//                     initial={{ opacity: 0, y: -10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     viewport={{ once: false }}
//                   >
//                     {testimonial.rating.map((star, starIndex) => (
//                       <img
//                         key={starIndex}
//                         src={star}
//                         alt="star"
//                         className={styles.imagstar}
//                       />
//                     ))}
//                   </motion.div>
//                   <motion.p
//                     className={`mb-4 text-center ${styles.deco}`}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     viewport={{ once: false }}
//                   >
//                     {t(testimonial.descriptionKey)}
//                   </motion.p>
//                   <motion.div
//                     className="d-flex align-items-center justify-content-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     viewport={{ once: false }}
//                   >
//                     <img
//                       src={testimonial.image}
//                       className={styles.image}
//                       alt={t(testimonial.nameKey)}
//                     />
//                     <h5 className="ms-3">{t(testimonial.nameKey)}</h5>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* 🟢 أزرار التحكم (Next & Prev) */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#testimonialCarousel"
//             data-bs-slide="prev"
//           >
//             <span
//               className={`carousel-control-prev-icon ${styles.controlIcon}`}
//               aria-hidden="true"
//             ></span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#testimonialCarousel"
//             data-bs-slide="next"
//           >
//             <span
//               className={`carousel-control-next-icon ${styles.controlIcon}`}
//               aria-hidden="true"
//             ></span>
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Testimonial;
