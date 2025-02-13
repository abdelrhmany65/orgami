
import TopImage from '../utils/topimage/TopImage'
import Why from '../components/why/Why'
import Vision from '../components/cards/Vision';
import AboutCop from '../components/About/About';
import FormContact from '../components/formContact/FormContact';

import styles from "../page.module.css";

const About = () => {
  return (
    <div>
      <TopImage title={"About us"}/>
      <section className={`${styles.topsection}`}>
      <AboutCop />
      </section>
      <section className={`${styles.topsection}`}>
        <Vision />
      </section>
      <section className={`${styles.topsection}`}>
        <Why />
      </section>
      <FormContact />
      
    </div>
  )
}

export default About