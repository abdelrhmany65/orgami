
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
      <section className={`${styles.topsection}`}>
      <section className={`row m-0 p-0`}>
        <HowWork 
          title="howWork.analysis.title" 
          description="howWork.analysis.description" 
          imageSrc="/images/service__no__01.png" 
          altText="howWork.analysis.title"
          showLink={false}
        />
        <HowWork 
          title="howWork.design.title" 
          description="howWork.design.description" 
          imageSrc="/images/service__no__02.png" 
          altText="howWork.design.title"
          showLink={false}
        />
        <HowWork 
          title="howWork.development.title" 
          description="howWork.development.description" 
          imageSrc="/images/service__no__03.png" 
          altText="howWork.development.title"
          showLink={false}
        />
        <HowWork 
          title="howWork.deliverySupport.title" 
          description="howWork.deliverySupport.description" 
          imageSrc="/images/service__no__04.png" 
          altText="howWork.deliverySupport.title"
          showLink={false}
        />
      </section>
      </section>

        <FormContact />

    </div>
  )
}

export default page