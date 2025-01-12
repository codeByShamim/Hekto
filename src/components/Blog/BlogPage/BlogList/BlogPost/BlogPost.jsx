import React from 'react';
import { MdEdit, MdCalendarToday } from 'react-icons/md';
import styles from './BlogPost.module.css';

const BlogPost = ({ post, onReadMore }) => {
  return (
    <div className={styles.blogPost}>
      <img src={post.image} alt={post.title} className={styles.blogImage} />
      <div className={styles.blogDetails}>
        <p className={styles.authorAndDate}>
          <span className={styles.author}>
            <MdEdit size={16} className={styles.authorIcon} /> By {post.author}
          </span>
          <span className={styles.date}>
            <MdCalendarToday size={16} className={styles.dateIcon} /> {post.date}
          </span>
        </p>
        <h3>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <button onClick={onReadMore} className={styles.readMoreBtn}>Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
