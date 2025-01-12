import React from 'react';
import IconGroup from '../../shared/IconGroup/IconGroup'; // Adjust the path if necessary
import styles from './GridProduct.module.css';

const GridProduct = ({ product }) => {
  return (
    <div className={styles.gridProduct}>
      <div className={styles.productImageContainer}>
        {/* Product Image */}
        <img 
          src={`/assets/images/products/${product.image}`}  // Path to images in the public folder
          alt={product.name} 
          className={styles.productImage} 
        />

        {/* Icon Group - Positioned at the bottom left of the image */}
        <IconGroup className={`${styles.customIcons}`} />
      </div>
      <div className={styles.productDetails}>
        <h3>{product.name}</h3>
        <div className={styles.threeDots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.deletedPrice}>${product.deletedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default GridProduct;
