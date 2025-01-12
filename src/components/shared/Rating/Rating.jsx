// src/components/shared/Rating/Rating.jsx
import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  return (
    <div className={styles.productRating}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fas fa-star ${
            i < Math.floor(rating) ? styles.filledStar : styles.emptyStar
          }`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
