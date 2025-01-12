import { useState, useEffect } from 'react';
import styles from './LatestProducts.module.css';
import productsData from '../../../data/products/products.json';
import IconGroup from '../../shared/IconGroup/IconGroup'; // Import the IconGroup component



const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('New Arrival');

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData.filter(product => product.tag === 'New Arrival'));
  }, []);

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    if (tag === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.tag === tag));
    }
  };

  const renderProducts = () => {
    return filteredProducts.map((product) => {
      const imagePath = `/assets/images/products/${product.image}`;

      return (
        <div className={styles.product} key={product.id}>
          <div className={styles.imageContainer}>
            <img
              src={imagePath || '/placeholder.png'}
              alt={product.name}
              className={styles.productImage}
            />


<IconGroup
  className={styles.customIcons} // Custom container class
  iconClasses={{
    cartIcon: styles.customCartIcon, // Custom class for the cart icon
    wishlistIcon: styles.customWishlistIcon, // Custom class for the wishlist icon
    detailsIcon: styles.customDetailsIcon, // Custom class for the details icon
  }}
/>

          </div>
          <div className={styles.productDetails}>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>
                <span className={styles.originalPrice}>${product.price}</span>
                <span className={styles.deletedPrice}>${product.deletedPrice}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.latestProducts}>
      <div className={styles.header}>
        <h2>Latest Products</h2>
        <div className={styles.filter}>
          <button
            onClick={() => handleTagFilter('New Arrival')}
            className={selectedTag === 'New Arrival' ? styles.active : ''}
          >
            New Arrival
          </button>
          <button
            onClick={() => handleTagFilter('Featured')}
            className={selectedTag === 'Featured' ? styles.active : ''}
          >
            Featured
          </button>
          <button
            onClick={() => handleTagFilter('Best Seller')}
            className={selectedTag === 'Best Seller' ? styles.active : ''}
          >
            Best Seller
          </button>
          <button
            onClick={() => handleTagFilter('Special Offer')}
            className={selectedTag === 'Special Offer' ? styles.active : ''}
          >
            Special Offer
          </button>
        </div>
      </div>

      <div className={styles.productList}>
        {renderProducts()}
      </div>
    </div>
  );
};

export default LatestProducts;
