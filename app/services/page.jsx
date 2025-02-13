
import ServisCopo from '../components/[sliders]/ServisCopo/ServisCopo'
import TopImage from '../utils/topimage/TopImage'
import Why from '../components/why/Why';
import HowWork from '../components/cards/HowWork';
import FormContact from '../components/formContact/FormContact';

import styles from "../page.module.css";

const page = () => {
  return (
    <div>
      <TopImage title={"Our Service"}/>
      <section className={`${styles.topsection}`}>
        <ServisCopo />
      </section>
      <section className={`${styles.topsection}`}>
        <Why />
      </section>
      <section className={`${styles.topsection}`}>
        <HowWork />
      </section>

        <FormContact />

    </div>
  )
}

export default page