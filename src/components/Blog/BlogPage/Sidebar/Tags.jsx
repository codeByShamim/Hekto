import React from 'react';
import styles from './Sidebar.module.css';

const Tags = ({ tags, setTag, selectedTag }) => {
  return (
    <div className={styles.tags}>
      <h4>Tags</h4>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={`${styles.tag} ${selectedTag === tag ? styles.active : ''}`}
            onClick={() => setTag(selectedTag === tag ? null : tag)} // Toggle tag selection
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
