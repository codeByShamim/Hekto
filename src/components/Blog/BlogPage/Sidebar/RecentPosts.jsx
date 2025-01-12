import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Sidebar.module.css';

const RecentPosts = ({ posts, setSelectedPostId }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);  // Optionally update the selected post id state
    navigate(`/blog/${postId}`);  // Navigate to the SingleBlogPage with the specific post ID
  };

  return (
    <div className={styles.recentPosts}>
      <h4>Recent Posts</h4>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className={styles.recentPost}
            onClick={() => handlePostClick(post.id)} // Use handlePostClick on click
            style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
          >
            <div className={styles.recentPostImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.recentPostDetails}>
              <p>{post.title}</p>
              <span>{post.date}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default RecentPosts;
