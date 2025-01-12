import React from 'react';
import styles from './ListProduct.module.css';
import IconGroup from '../../shared/IconGroup/IconGroup';
import Rating from '../../shared/Rating/Rating'; // Import the Rating component

const ListProduct = ({ product }) => {
  return (
    <div className={styles.listProduct}>
      {/* Image Section */}
      <div className={styles.productImageWrapper}>
        <img
          src={`/assets/images/products/${product.image}`}
          alt={product.name}
          className={styles.productImage}
        />
      </div>

      {/* Details Section */}
      <div className={styles.productDetails}>
        {/* Top Row: Title and Dots */}
        <div className={styles.productTopRow}>
          <div>
            <h3 className={styles.productTitle}>{product.name}</h3>
          </div>
          <div className={styles.threeDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Middle Row: Price, Deleted Price, and Rating */}
        <div className={styles.productMiddleRow}>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.productDeletedPrice}>
            {product.deletedPrice && `$${product.deletedPrice}`}
          </p>
          {/* Use the Rating component */}
          <Rating rating={product.rating} />
        </div>
        <p className={styles.productDescription}>{product.description}</p>

        {/* Icon Group - Positioned at the bottom left of the image */}
        <IconGroup className={`${styles.customIcons}`} />
      </div>
    </div>
  );
};

export default ListProduct;
