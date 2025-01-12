import React from 'react';
import ProductFilterSidebar from '../ProductFilterSidebar/ProductFilterSidebar'; 
import GridProduct from '../GridProduct/GridProduct';
import ListProduct from '../ListProduct/ListProduct';
import Pagination from '../Pagination/Pagination';
import styles from './ShopContainer.module.css';

const ShopContainer = ({ view, products, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className={styles.shopContainerWrapper}>
      <ProductFilterSidebar />
      <div className={styles.shopContent}>
        <div className={`${styles.shopProducts} ${styles[view]}`}>
          {products.map((product) => (
            <div key={product.id}>
              {view === 'grid' ? (
                <GridProduct product={product} />
              ) : (
                <ListProduct product={product} />
              )}
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default ShopContainer;
