import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages === 0) {
    return (
      <div className={styles.pagination}>
        <span className={`${styles.pageButton} ${styles.disabled}`}>Prev</span>
        <span className={`${styles.pageButton} ${styles.disabled}`}>Next</span>
      </div>
    );
  }

  let pageNumbers = [];

  if (totalPages <= 3) {
    pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);
  } else {
    if (currentPage === 1) {
      pageNumbers = [1, 2, 3];
    } else if (currentPage === totalPages) {
      pageNumbers = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [currentPage - 1, currentPage, currentPage + 1];
    }
  }

  return (
    <div className={styles.pagination}>
      {/* Previous Button */}
      <span
        onClick={() => onPageChange(currentPage - 1)}
        className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
      >
        Prev
      </span>

      {/* Show the first page if not already shown */}
      {pageNumbers[0] > 1 && (
        <>
          <span onClick={() => onPageChange(1)} className={styles.pageButton}>1</span>
          {pageNumbers[0] > 2 && <span className={styles.pageButton}>...</span>}
        </>
      )}

      {/* Display the current and adjacent pages */}
      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
        >
          {page}
        </span>
      ))}

      {/* Show the last page if not already shown */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && <span className={styles.pageButton}>...</span>}
          <span onClick={() => onPageChange(totalPages)} className={styles.pageButton}>{totalPages}</span>
        </>
      )}

      {/* Next Button */}
      <span
        onClick={() => onPageChange(currentPage + 1)}
        className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
