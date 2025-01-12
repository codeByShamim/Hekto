import React, { useState } from 'react';
import styles from './TopCategories.module.css'; // Import the styles for this component
import productsData from '../../../data/products/products.json'; // Import the products JSON file

const TopCategories = () => {
  const [activeDot, setActiveDot] = useState(0); // Track the active dot index

  const handleDotClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className={styles.topCategories}>
      <h2 className={styles.heading}>Top Categories</h2> {/* Heading for the section */}

      <div className={styles.products}>
        {productsData.filter(product => product.tag === 'Top Categories').map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img 
                src={`/assets/images/products/${product.image}`} 
                alt={product.name} 
                className={styles.productImage} 
              />
              <button className={styles.viewButton}>View Shop</button> {/* View button */}
            </div>
            <div className={styles.productDetails}>
              <h4 className={styles.productName}>{product.name}</h4> {/* Product name */}
              <p className={styles.productPrice}>${product.price}</p> {/* Product price */}
            </div>
          </div>
        ))}
      </div>

      {/* Dots below products */}
      <div className={styles.dots}>
        {productsData.filter(product => product.tag === 'Top Categories').map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${activeDot === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
