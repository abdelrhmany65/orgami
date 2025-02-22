
import Link from "next/link";
import Heroimage from "./components/Heroimage/HeroImage";
import CardAbout from "./components/cards/CardAbout";
import AboutCop from "./components/About/About";
import ServisCopo from "./components/[sliders]/ServisCopo/ServisCopo";
// import Experience from "./components/experience/Experience";
import Why from "./components/why/Why";
// import Testimonial from "./components/testmonial/Testimonial";
import FormContact from "./components/formContact/FormContact";

import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <Heroimage />
      <CardAbout />
      <div className={styles.mainaboutcomp}>
        <AboutCop />
      </div>
      <section className={`${styles.topsection}`}>
        <ServisCopo />
      </section>
      <section className={`${styles.topsection}`}>
        {/* <Experience /> */}
        <Why />
      </section>
      {/* <section className={`${styles.topsection}`}>

        <Testimonial />
      </section> */}
      <FormContact />

    </div>
  );
}
