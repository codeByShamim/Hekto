import React from 'react';
import imagePath from '../../../assets/images/products/UniqueFeatureSofa.png';
import styles from './UniqueFeature.module.css';

const UniqueFeature = () => {
  return (
    <div className={styles.UniqueFeatureWrapper}>
      {/* Wrapper for the unique feature section */}
      <div className={styles.uniqueFeature}>
        {/* Left Section: Displays the product image */}
        <div className={styles.leftSection}>
          <div className={styles.imageSection}>
            <img src={imagePath} alt="Product Image" />
          </div>
        </div>

        {/* Right Section: Contains content like heading, description, and bottom section */}
        <div className={styles.rightSection}>
          {/* Section Title */}
          <h2>Unique Features Of Latest & Trending Products</h2>

          {/* Description Section */}
          <div className={styles.description}>
            {/* List of unique features with bullet points */}
            <div className={styles.text}>
              {/* Each dot item represents a unique feature */}
              <div className={styles.dotItem}>
                <span className={`${styles.dot} ${styles.dot1}`}></span>
                <p>All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className={styles.dotItem}>
                <span className={`${styles.dot} ${styles.dot2}`}></span>
                <p>Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails</p>
              </div>
              <div className={styles.dotItem}>
                <span className={`${styles.dot} ${styles.dot3}`}></span>
                <p>Arms, backs, and seats are structurally reinforced</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Contains the Add to Cart button and product information */}
          <div className={styles.bottomSection}>
            <div className={styles.cartPriceSection}>
              {/* Add to Cart Button */}
              <button className={styles.addToCart}>Add To Cart</button>
              {/* Product Information: Name and Price */}
              <div className={styles.productInfo}>
                <span className={styles.productName}>B&B Italian Sofa</span>
                <span className={styles.price}>$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeature;
