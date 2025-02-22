
import ServisCopo from '../components/[sliders]/ServisCopo/ServisCopo'
import Why from '../components/why/Why';
import HowWork from '../components/cards/HowWork';
import FormContact from '../components/formContact/FormContact';

import styles from "../page.module.css";
import ServisCopoTwo from '../components/[sliders]/ServisCopo/ServisCopoTwo';

const page = () => {
  return (
    <div>
      
      <ServisCopoTwo />
        <section className={`${styles.topsection}`}>
          <Why />
        </section>
        <HowWork />
        

        <FormContact />

    </div>
  )
}

export default page