// import Experience from '../components/experience/Experience';
import styles from "../page.module.css";
import ServisCopo from '../components/[sliders]/ServisCopo/ServisCopo';
// import Testimonial from '../components/testmonial/Testimonial';
import FormContact from '../components/formContact/FormContact';
import Why from '../components/why/Why';
import HowWorkTwo from '../components/cards/HowWorkTwo';


const Projects = () => {
  return (
    <div>
      <HowWorkTwo />
      <section className={`${styles.topsection02}`}>
        <ServisCopo />
      </section>

      <section className={`${styles.topsection}`}>
        {/* <Experience /> */}
        <Why />
      </section>
      
      {/* <section className={`${styles.topsection02}`}>
        <Testimonial />
      </section> */}

      <FormContact />
    </div>
  );
};

export default Projects;
