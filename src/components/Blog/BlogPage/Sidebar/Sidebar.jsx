import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import SaleProducts from "./SaleProducts";
import OfferProducts from "./OfferProducts";
import SocialLinks from "./SocialLinks";
import Tags from "./Tags";
import styles from "./Sidebar.module.css";
import blogData from "../../../../data/blog/blogData.json";
import productsData from "../../../../data/products/products.json"; // Your products data
import { useSearchContext } from "../../../../context/blog/SearchContext";

const Sidebar = ({ setCategory, selectedCategory, setTag, selectedTag, setSelectedPostId }) => {
  const { blogs, offerProducts, socialLinks, tags } = blogData;
  const { searchTerm, setSearchTerm } = useSearchContext();

  // Calculate the count for each category
  const categoryCounts = blogs.reduce((acc, post) => {
    const category = post.category;
    if (category) {
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc;
  }, {});

  // Filter and sort posts for recent posts
  const filteredPosts = blogs
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent first

  // Get the top 4 recent posts
  const recentPosts = filteredPosts.slice(0, 4);

  // Filter featured products for the SaleProducts component
  const saleProducts = productsData.filter((product) => product.featuredInBlog).slice(0, 3); // Limit to 3 products

  return (
    <div className={styles.sidebar}>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Categories
        categories={categoryCounts}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      <RecentPosts posts={recentPosts} setSelectedPostId={setSelectedPostId} />
      <SaleProducts products={saleProducts} />
      <OfferProducts products={productsData} />
      <SocialLinks socialLinks={socialLinks} />
      <Tags tags={tags} setTag={setTag} selectedTag={selectedTag} />
    </div>
  );
};

export default Sidebar;
