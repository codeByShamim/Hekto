import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import styles from './SingleBlogPage.module.css';

const BlogNavigation = ({ prevPost, nextPost, handleNavigation }) => {
  return (
    <div className={styles.navigation}>
      {prevPost && (
        <button
          onClick={() => handleNavigation(prevPost.id)}
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          <MdArrowBack size={24} />
          Previous Post
        </button>
      )}
      {nextPost && (
        <button
          onClick={() => handleNavigation(nextPost.id)}
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          Next Post
          <MdArrowForward size={24} />
        </button>
      )}
    </div>
  );
};

export default BlogNavigation;
