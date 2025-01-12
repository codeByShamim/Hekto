import React from 'react';
import styles from './Sidebar.module.css';

const Categories = ({ categories, setCategory, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    setCategory(category === selectedCategory ? null : category); // Toggle category selection
  };

  return (
    <div className={styles.categories}>
      <h4>Categories</h4>
      <ul className={styles.categoryList}>
        {Object.entries(categories).map(([category, count]) => (
          <li
            key={category}
            className={`${styles.categoryItem} ${
              selectedCategory === category ? styles.activeCategory : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category} <span className={styles.categoryCount}>({count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
