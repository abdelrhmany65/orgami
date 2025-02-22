// "use client";

// import { useTranslation } from "react-i18next";
// import { experienceImages } from "../../utils/images/images";
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// import styles from "./experience.module.css";

// const Experience = () => {
//   const { t, i18n } = useTranslation();
//   const counterValues = [10, 500, 2000, 10]; 
//   const [ref, inView] = useInView({
//     threshold: 0.3, 
//     triggerOnce: true, 
//   });

//   return (
//     <section
//       ref={ref} 
//       className={`${styles.experience}  text-center position-relative`}
//     >

//       <div className='container'>
//         <div className="row">
//           {experienceImages.map((item, index) => (
//             <div className='col-lg-3 col-md-6' key={index}>
//               <div className={`${styles.Exservicecard} card border-0 `}>
//                 <div className={`card ${styles.cardex}`}>
//                   {/* Icon */}
//                   <div className={`d-flex justify-content-center `}>
//                     <img src={item.icon} alt="icon" className={`p-4 ${styles.experienceIcon}`} width={100} height={100}/>
//                   </div>
//                   {/* Title */}
//                   <div className="text-center mt-5 fw-bold fs-5 text-white">
//                     {t(`experience.${item.key}`)}
//                   </div>
//                   {/* Counter */}
//                   <div className="text-center fw-bold fs-3 pb-5 text-white">
//                     {inView && (
//                       <CountUp
//                         start={0}
//                         end={counterValues[index]}
//                         duration={2.5}
//                         prefix="+"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;