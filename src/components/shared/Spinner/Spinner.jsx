// shared/Spinner/Spinner.js
import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
);

export default Spinner;
