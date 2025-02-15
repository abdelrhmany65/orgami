"use client";

import TopImage from '../../utils/topimage/TopImage';
import { useTranslation } from "react-i18next";
import styles from "./howwork.module.css";

import HowWork from './HowWork';

const HowWorkTwo = () => {
  const { t } = useTranslation();

  return (
    <div>
    <TopImage title={t('service_card.title')}/>
      <div className="container">
        <section className={`${styles.topsection}`}>
          <section className={`row m-0 p-0 ${styles.topsection02}`}>
            <HowWork 
              title="projectsCards.systemsDevelopment.title" 
              description="projectsCards.systemsDevelopment.decoration" 
              imageSrc="/images/service__no__01.png" 
              altText="projectsCards.systemsDevelopment.title"
              showLink={true}
              linkHref="/projects/project/systemsdevelopment" 
            />
            <HowWork 
              title="projectsCards.webDevelopment.title" 
              description="projectsCards.webDevelopment.decoration" 
              imageSrc="/images/service__no__02.png" 
              altText="projectsCards.webDevelopment.title" 
              showLink={true}
              linkHref="/projects/project/webdevelopment" 
            />
          </section>
          <div className={`row ${styles.topsection02}`}>
          <HowWork 
              title="projectsCards.mobileAppDevelopment.title" 
              description="projectsCards.mobileAppDevelopment.decoration" 
              imageSrc="/images/service__no__03.png" 
              altText="projectsCards.mobileAppDevelopment.title"
              showLink={true}
              linkHref="/projects/project/appapplication" 
    
            />
            <HowWork 
              title="projectsCards.dataAnalysis.title" 
              description="projectsCards.dataAnalysis.decoration" 
              imageSrc="/images/service__no__04.png" 
              altText="projectsCards.dataAnalysis.title" 
              showLink={true}
              linkHref="/projects/project/dataanalysis" 
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HowWorkTwo