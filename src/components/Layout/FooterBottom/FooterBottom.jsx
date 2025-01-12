import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './FooterBottom.module.css';

const FooterBottom = () => {
  return (
   <div className={styles.footerBottomWrapper}>
     <div className={styles.footerBottom}>
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      <div className={styles.socialMedia}>
        <a href="#" className={styles.socialIcon}><FaFacebook /></a>
        <a href="#" className={styles.socialIcon}><FaTwitter /></a>
        <a href="#" className={styles.socialIcon}><FaInstagram /></a>
      </div>
    </div>
   </div>
  );
};

export default FooterBottom;
