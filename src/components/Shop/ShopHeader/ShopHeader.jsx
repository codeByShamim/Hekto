import React from "react";
import styles from "./ShopHeader.module.css";
import ShopFilters from "../ShopFilters/ShopFilters"; 

const ShopHeader = ({ setView, view, setSearchQuery, setSortOrder, setProductsPerPage }) => {
  return (
    <header className={styles.shopHeader}>
      <div className={styles.leftSide}>
        <h2 className={styles.title}>Ecommerce Accessories & Fashion Items</h2>
        <p className={styles.results}>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className={styles.rightSide}>
        <ShopFilters 
          setView={setView}
          view={view}
          setSearchQuery={setSearchQuery}
          setSortOrder={setSortOrder}
          setProductsPerPage={setProductsPerPage}
        />
      </div>
    </header>
  );
};

export default ShopHeader;
