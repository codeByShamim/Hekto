import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPost from "./BlogPost/BlogPost";
import styles from "./BlogList.module.css";

const BlogList = ({ currentBlogs, handleReadMore }) => {
  const navigate = useNavigate();

  const handleReadMoreLocal = (id) => {
    handleReadMore(id); // Calls the handleReadMore passed from BlogPage
    navigate(`/blog/${id}`);
  };

  return (
    <div className={styles.blogList}>
      {currentBlogs.length > 0 ? (
        currentBlogs.map((post) => (
          <BlogPost
            key={post.id}
            post={post}
            onReadMore={() => handleReadMoreLocal(post.id)}
          />
        ))
      ) : (
        <p>No posts found based on your search, selected category, or tag.</p>
      )}
    </div>
  );
};

export default BlogList;
