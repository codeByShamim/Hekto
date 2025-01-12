import React from "react";
import styles from "./Sidebar.module.css";

const OfferProducts = ({ products }) => {
  // Filter products to show only those with isOfferProduct set to true
  const offerProducts = products.filter(
    (product) => product.isOfferProduct === true
  );

  return (
    <div className={styles.offerProducts}>
      <h4>Offer Products</h4>
      {offerProducts.length > 0 ? (
        <div className={styles.offerProductsList}>
          {offerProducts.map((product) => (
            <div key={product.id} className={styles.offerProduct}>
              <img
                src={`/assets/images/products/${product.image}`}
                alt={product.name}
                className={styles.offerProductImage}
              />
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>
                ${product.price.toFixed(2)}{" "}
                <span className={styles.deletedPrice}>
                  ${product.deletedPrice.toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No offer products available.</p>
      )}
    </div>
  );
};

export default OfferProducts;
