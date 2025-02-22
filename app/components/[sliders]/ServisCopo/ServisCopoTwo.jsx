"use client";
import { useTranslation } from "react-i18next";

import ServisCopo from "./ServisCopo";
import TopImage from "../../../utils/topimage/TopImage";


const ServisCopoTwo = () => {
  const { t } = useTranslation();

  return (
    <div>
        <TopImage title={t('service_card.title')}/>
        <ServisCopo />
    </div>
  )
}

export default ServisCopoTwo