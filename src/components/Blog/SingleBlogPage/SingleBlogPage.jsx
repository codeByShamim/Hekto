import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogComments from "./BlogComments";
import BlogNavigation from "./BlogNavigation";
import RecentPosts from "../BlogPage/Sidebar/RecentPosts";
import SaleProducts from "../BlogPage/Sidebar/SaleProducts";
import OfferProducts from "../BlogPage/Sidebar/OfferProducts";
import SocialLinks from "../BlogPage/Sidebar/SocialLinks";
import GroupLogo from "../../shared/GroupLogo/GroupLogo";
import styles from "./SingleBlogPage.module.css";
import productsData from "../../../data/products/products.json";

const SingleBlogPage = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  const postIndex = blogs.findIndex((blog) => blog.id === parseInt(id));

  if (postIndex === -1) {
    return <div>Post not found</div>;
  }

  const post = blogs[postIndex];
  const prevPost = blogs[postIndex - 1] || null;
  const nextPost = blogs[postIndex + 1] || null;

  // Sort blogs by date in descending order and limit to 4 for recent posts
  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (latest first)
    .slice(0, 4); // Take the latest 4 posts

  const saleProducts = productsData.filter((product) => product.featuredInBlog).slice(0, 3);
  const offerProducts = productsData.filter((product) => product.isOfferProduct).slice(0, 4);

  const socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  };

  const handleNavigation = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className={styles.blogPost}>
      <CustomHeader
        title="Single Blog"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog page", link: "/blog" }, { label: post.title }]}
      />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <BlogHeader post={post} />
          <BlogContent post={post} products={productsData} />
          {/* Pass showTitle={false} to hide the title */}
          <SocialLinks socialLinks={socialLinks} className={styles.customSocialLinks} showTitle={false} />
          <BlogNavigation prevPost={prevPost} nextPost={nextPost} handleNavigation={handleNavigation} />
          <BlogComments />
        </div>
        <div className={styles.sidebar}>
          <RecentPosts posts={recentPosts} setSelectedPostId={(postId) => handleNavigation(postId)} />
          <SaleProducts products={saleProducts} />
          <OfferProducts products={offerProducts} />
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
      <GroupLogo />
    </div>
  );
};

export default SingleBlogPage;
