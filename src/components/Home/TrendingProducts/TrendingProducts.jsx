import React from 'react';
import products from '../../../data/products/products.json';
import styles from './TrendingProducts.module.css';

// Function to dynamically resolve the image path using the public folder
const importImage = (imageName) => `/assets/images/products/${imageName}`;

const TrendingProducts = () => {
  // Filter products to include only items tagged as 'Trending'
  const trendingProducts = products.filter((product) => product.tag === 'Trending');

  return (
    <div className={styles.trendingProducts}>
      {/* Section: Top Heading */}
      <h2 className={styles.heading}>Trending Products</h2>

      {/* Section: Product Listings (Top Grid, 4 items) */}
      <div className={styles.productList}>
        {trendingProducts.slice(0, 4).map((product) => (
          <div key={product.id} className={styles.productItem}>
            {/* Product Image Wrapper */}
            <div className={styles.productImageWrap}>
              <img
                className={styles.productImage}
                src={importImage(product.image)} // Dynamically resolve the image path
                alt={`Trending Product: ${product.name}`}
              />
            </div>
            {/* Product Information */}
            <div className={styles.productInfo}>
              <span className={styles.productName}>{product.name}</span>
              <div className={styles.productPrice}>
                <span className={styles.currentPrice}>${product.price}</span>
                <span className={styles.deletedPrice}>${product.deletedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section: Bottom Section (Split into Left and Right) */}
      <div className={styles.bottomSection}>
        {/* Left Section: 70% Width */}
        <div className={styles.leftSection}>
          {trendingProducts.slice(4, 6).map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${
                index % 2 === 0 ? styles.bgColorOne : styles.bgColorTwo // Alternate background colors
              }`}
            >
              {/* Product Name */}
              <div className={styles.cardTop}>{product.name}</div>
              {/* Shop Now Link */}
              <a href="/shop" className={styles.shopNowLink}>
                Shop Now
              </a>
              {/* Product Image */}
              <img
                className={styles.cardImage}
                src={importImage(product.image)} // Dynamically resolve the image path
                alt={`Trending Product: ${product.name}`}
              />
            </div>
          ))}
        </div>

        {/* Right Section: 30% Width */}
        <div className={styles.rightSection}>
          {trendingProducts.slice(6, 9).map((product) => (
            <div key={product.id} className={styles.verticalCard}>
              {/* Vertical Product Image */}
              <img
                className={styles.verticalImage}
                src={importImage(product.image)} // Dynamically resolve the image path
                alt={`Trending Product: ${product.name}`}
              />
              {/* Vertical Product Information */}
              <div className={styles.verticalInfo}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.deletedPrice}>${product.deletedPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
