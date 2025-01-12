import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import styles from './ProductFilterSidebar.module.css';
import products from '../../../data/products/products.json'; // Adjusted path to products.json

const ProductFilterSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [ratingsData, setRatingsData] = useState({});

  useEffect(() => {
    const fetchCategoriesAndBrands = async () => {
      try {
        // Fetch unique categories
        const uniqueCategories = [...new Set(products.map((product) => product.category))];
        setCategories(uniqueCategories);

        // Fetch unique brands
        const uniqueBrands = [...new Set(products.map((product) => product.brand))];
        setBrands(uniqueBrands);

        // Fetch unique discount ranges
        const discountValues = products.map((product) => {
          const discountString = product.discount.replace('%', ''); // Remove the '%' sign
          return parseInt(discountString, 10); // Convert to number
        });

        const uniqueDiscountRanges = [
          '20% Cashback',
          '5% Cashback Offer',
          '25% Discount Offer',
        ].filter((range) => {
          const minDiscount = parseInt(range.split('%')[0], 10);
          return discountValues.some((discount) => discount >= minDiscount);
        });

        setDiscounts(uniqueDiscountRanges);

        // Calculate ratings data
        const ratingsCount = [5, 4, 3, 2, 1].reduce((acc, rating) => {
          acc[rating] = products.filter(
            (product) => Math.round(product.rating) === rating
          ).length;
          return acc;
        }, {});

        setRatingsData(ratingsCount);
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };

    fetchCategoriesAndBrands();
  }, []);

  return (
    <div className={styles.sidebar}>
      {/* Product Brand Filter */}
      <div className={styles.filterGroup}>
        <h4>Product Brand</h4>
        {brands.length > 0 ? (
          brands.map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={`brand${brand}`}
                style={{ accentColor: '#603EFF' }}
              />{' '}
              {brand}
            </label>
          ))
        ) : (
          <p>Loading brands...</p>
        )}
      </div>


        {/* Discount Offer Filter */}
      <div className={styles.filterGroup}>
        <h4>Discount Offer</h4>
        {discounts.length > 0 ? (
          discounts.map((discount, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={`discount${discount}`}
                style={{ accentColor: '#FF3EB2' }}
              /> {discount}
            </label>
          ))
        ) : (
          <p>Loading discounts...</p>
        )}
      </div>

  {/* Rating Filter */}
<div className={styles.filterGroup}>
  <h4>Rating</h4>
  {[5, 4, 3, 2, 1].map((rating) => (
    <label key={rating}>
      <input
        type="checkbox"
        name={`rating${rating}`}
        style={{ accentColor: '#FFD700' }}
      />
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color={i < rating ? '#FFD700' : '#e4e5e9'} />
      ))}{' '}
      ({ratingsData[rating] || 0})
    </label>
  ))}
</div>


      {/* Categories Filter */}
      <div className={styles.filterGroup}>
        <h4>Categories</h4>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={category}
                style={{ accentColor: '#FF3EB2' }}
              />{' '}
              {category}
            </label>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      {/* Price Range Filter */}
      <div className={`${styles.filterGroup} ${styles.bottomFilter}`}>
        <h4>Price Filter</h4>
        <label>
          <input
            type="checkbox"
            name="price0-50"
            style={{ accentColor: '#603EFF' }}
          />{' '}
          $0 - $50
        </label>
        <label>
          <input
            type="checkbox"
            name="price50-100"
            style={{ accentColor: '#603EFF' }}
          />{' '}
          $50 - $100
        </label>
        <label>
          <input
            type="checkbox"
            name="price100-200"
            style={{ accentColor: '#603EFF' }}
          />{' '}
          $100 - $200
        </label>
        <label>
          <input
            type="checkbox"
            name="price200+"
            style={{ accentColor: '#603EFF' }}
          />{' '}
          $200+
        </label>
        <div className={styles.priceInputWrapper}>
          <input
            type="text"
            placeholder="$10.00 - $20000.00"
            className={styles.priceInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>

      {/* Color Filter */}
      <div className={styles.filterGroup}>
        <h4>Filter By Color</h4>
        <div className={styles.colorGrid}>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Blue</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#0000FF' }}></span>
          </div>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Orange</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#FFA500' }}></span>
          </div>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Brown</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#A52A2A' }}></span>
          </div>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Green</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#008000' }}></span>
          </div>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Purple</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#800080' }}></span>
          </div>
          <div className={styles.colorItem}>
            <span className={styles.colorName}>Sky</span>
            <span className={styles.colorDot} style={{ backgroundColor: '#87CEEB' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
