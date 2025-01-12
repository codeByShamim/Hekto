// components/Blog/LatestBlog.js
import React, { useState, useEffect } from 'react';
import Spinner from '../../shared/Spinner/Spinner'; // Import Spinner component
import useLoading from '../../shared/hooks/useLoading'; // Import useLoading hook
import styles from './LatestBlog.module.css';
import blogData from '../../../data/blog/blogData.json';
import { FaPen, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LatestBlog = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const { loading, startLoading } = useLoading(1000); // Set duration for spinner
  const navigate = useNavigate();

  useEffect(() => {
    const sortedBlogs = blogData.blogs.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setLatestBlogs(sortedBlogs.slice(0, 3));
  }, []);

  const handleReadMore = (blogId) => {
    startLoading(); // Start the spinner
    setTimeout(() => {
      navigate(`/blog/${blogId}`);
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className={styles.latestBlog}>
      <h2 className={styles.header}>Latest Blog</h2>
      <div className={styles.blogList}>
        {latestBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogItem}>
            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            <div className={styles.blogDetails}>
              <div className={styles.writerInfo}>
                <FaPen className={styles.writerIcon} />
                <span className={styles.writerName}>{blog.author}</span>
                <FaCalendarAlt className={styles.calendarIcon} />
                <span className={styles.blogDate}>{blog.date}</span>
              </div>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDescription}>{blog.excerpt}</p>
              <button 
                className={styles.readMoreBtn} 
                onClick={() => handleReadMore(blog.id)}
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Loading...' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading && <Spinner />} {/* Show spinner when loading */}
    </div>
  );
};

export default LatestBlog;
