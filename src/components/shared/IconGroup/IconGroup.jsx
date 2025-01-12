import styles from './IconGroup.module.css';

const IconGroup = ({ className, iconClasses = {} }) => {
  return (
    <div className={`${styles.icons} ${className || ''}`}>
      <div
        className={`${styles.iconWrapper} ${styles.cartIcon} ${iconClasses.cartIcon || ''}`}
      >
        <img src="/icons/shopping-cart.png" alt="Add to Cart" className={styles.icon} />
      </div>
      <div
        className={`${styles.iconWrapper} ${styles.wishlistIcon} ${iconClasses.wishlistIcon || ''}`}
      >
        <img src="/icons/heart.png" alt="Add to Wishlist" className={styles.icon} />
      </div>
      <div
        className={`${styles.iconWrapper} ${styles.detailsIcon} ${iconClasses.detailsIcon || ''}`}
      >
        <img src="/icons/zoom.png" alt="View Details" className={styles.icon} />
      </div>
    </div>
  );
};

// Default export
export default IconGroup;
