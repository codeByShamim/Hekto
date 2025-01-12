import React from "react";
import { FiGrid, FiList } from "react-icons/fi";
import styles from "./ShopFilters.module.css";

const ShopFilters = ({ setView, view, setSearchQuery, setSortOrder, setProductsPerPage, productsPerPage }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Update sort order state
  };

  const handlePerPageChange = (e) => {
    const value = Number(e.target.value);
    if (value <= 15 && value > 0) {
      setProductsPerPage(value); // Update products per page state if valid
    } else if (!e.target.value) {
      setProductsPerPage(12); // Reset to initial value when empty
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterSection}>
        <span>Per Page:</span>
        <input 
          type="number" 
          min="1" 
          max="15" 
          value={productsPerPage} // Bind the value to productsPerPage state
          onChange={handlePerPageChange} // Handle the change properly
          placeholder="12" // Add placeholder text
        />
      </div>
      <div className={styles.filterSection}>
        <span>Sort by:</span>
        <select onChange={handleSortChange} defaultValue="bestmatch">
          <option value="bestmatch">Best Match</option>
          <option value="priceasc">Price (Low to High)</option>
          <option value="pricedesc">Price (High to Low)</option>
        </select>
      </div>
      <div className={styles.filterSection}>
        <span>View:</span>
        <button
          onClick={() => setView('grid')}
          className={`${styles.iconButton} ${view === 'grid' ? styles.active : ''}`}
          aria-label="Grid View"
        >
          <FiGrid />
        </button>
        <button
          onClick={() => setView('list')}
          className={`${styles.iconButton} ${view === 'list' ? styles.active : ''}`}
          aria-label="List View"
        >
          <FiList />
        </button>
      </div>
      <div className={styles.filterSection}>
        <input 
          type="text" 
          placeholder="Search products" 
          onChange={handleSearchChange} 
          aria-label="Search products"
        />
      </div>
    </div>
  );
};

export default ShopFilters;
