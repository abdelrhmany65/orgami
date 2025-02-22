

import Why from '../components/why/Why'
import Vision from '../components/cards/Vision';
import FormContact from '../components/formContact/FormContact';
import styles from "../page.module.css";
import AboutTwo from '../components/About/AboutTwo';

const About = () => {
  return (
    <div>

      <AboutTwo />
      <section className={`${styles.topsection}`}>
        <Vision />
      </section>
      <section className={`${styles.topsection}`}>
        <Why showButton={false} />
      </section>
      <FormContact />
      
    </div>
  )
}

export default About