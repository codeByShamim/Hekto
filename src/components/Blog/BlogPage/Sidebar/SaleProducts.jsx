import React from "react";
import styles from "./Sidebar.module.css";

const SaleProducts = ({ products }) => {
  // Filter products to show only those with featuredInBlog set to true
  const featuredProducts = products.filter(
    (product) => product.featuredInBlog === true
  );

  return (
    <div className={styles.saleProducts}>
      <h4>Sale Products</h4>
      {featuredProducts.length > 0 ? (
        featuredProducts.map((product) => (
          <div key={product.id} className={styles.saleProduct}>
            <div className={styles.saleProductImage}>
              {/* Construct the image path */}
              <img
                src={`/assets/images/products/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className={styles.saleProductDetails}>
              <p>{product.name}</p>
              <div className={styles.saleProductPrice}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                <span className={styles.deletedPrice}>
                  ${product.deletedPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No featured products available.</p>
      )}
    </div>
  );
};

export default SaleProducts;
