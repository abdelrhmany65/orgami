"use client";

import React from 'react';
import styles from "./topimage.module.css";

const TopImage = ({ title }) => {
  return (
    <div className={styles.TopImage}>
      <div className='row'>
        <h1 className={`fs-1 font-bold text-white mt-5 ${styles.title}`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TopImage;