import React from 'react';
import styles from './SingleBlogPage.module.css';
import Rating from '../../shared/Rating/Rating';

const RelatedProducts = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <img
            src={`/assets/images/products/${product.image}`}
            alt={product.name}
            className={styles.productImage}
          />
          <h4 className={styles.productName}>{product.name}</h4>
          <div className={styles.productPricing}>
            {/* Left: Price and Deleted Price */}
            <div className={styles.leftPricing}>
              <span className={styles.price}>${product.price}</span>
              {product.deletedPrice && (
                <span className={styles.deletedPrice}>
                  ${product.deletedPrice}
                </span>
              )}
            </div>
            {/* Right: Rating */}
            <Rating rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
