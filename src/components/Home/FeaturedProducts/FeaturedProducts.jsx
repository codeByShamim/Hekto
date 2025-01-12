import React from 'react';
import styles from './FeaturedProducts.module.css'; // Import the CSS module

// Import product images directly
import product1 from './images/featured-product01.png';
import product2 from './images/featured-product02.png';
import product3 from './images/featured-product03.png';
import product4 from './images/featured-product04.png';

// Import icon images
import cartIcon from './images/shopping-cart.png';  // Shopping cart icon
import heartIcon from './images/heart.png';  // Heart icon
import zoomIcon from './images/zoom.png';  // Zoom (search) icon

// Array of product data
const products = [
  {
    id: 1,
    image: product1,
    name: 'Modern Sofa',
    price: '$299',
    code: 'MS1234', // Product code
  },
  {
    id: 2,
    image: product2,
    name: 'Stylish Chair',
    price: '$199',
    code: 'SC5678', // Product code
  },
  {
    id: 3,
    image: product3,
    name: 'Dining Table',
    price: '$399',
    code: 'DT9101', // Product code
  },
  {
    id: 4,
    image: product4,
    name: 'Modern Table',
    price: '$659',
    code: 'MT1121', // Product code
  },
];

// FeaturedProducts Component
const FeaturedProducts = () => {
  return (
    <div className={styles.featuredProductsWrapper}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>Featured Products</h2>

      {/* Product Grid */}
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {/* Image Area */}
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />

              {/* Icons on Hover (Cart, Heart, Zoom) */}
              <div className={styles.iconContainer}>
                {/* Shopping Cart Icon */}
                <div className={styles.iconItem}>
                  <img src={cartIcon} alt="Cart" className={styles.icon} />
                </div>

                {/* Heart Icon */}
                <div className={styles.iconItem}>
                  <img src={heartIcon} alt="Heart" className={styles.icon} />
                </div>

                {/* Zoom Icon */}
                <div className={styles.iconItem}>
                  <img src={zoomIcon} alt="Zoom" className={styles.icon} />
                </div>
              </div>
            </div>

            {/* Product Content Below Image */}
            <div className={styles.cardContent}>
              {/* Product Name */}
              <h3 className={styles.productName}>{product.name}</h3>

              {/* Decorative Lines */}
              <div className={styles.lineContainer}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </div>

              {/* Product Code */}
              <p className={styles.productCode}>Code - {product.code}</p>

              {/* Product Price */}
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Center Lines */}
      <div className={styles.bottomLineContainer}>
        <span className={styles.bottomLine}></span>
        <span className={styles.bottomLine}></span>
        <span className={styles.bottomLine}></span>
        <span className={styles.bottomLine}></span>
      </div>
    </div>
  );
};

export default FeaturedProducts;
