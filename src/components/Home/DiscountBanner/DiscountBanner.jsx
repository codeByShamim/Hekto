import React from 'react';
import styles from './DiscountBanner.module.css';
import bannerImage from './images/banner-bg.png';  // Import the image

const DiscountBanner = () => {
  return (
    <div className={styles.discountBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Get Latest Update By Subscribe <br /> Our Newsletter
        </h2>
        <button className={styles.shopNowButton}>Subscribe Now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
