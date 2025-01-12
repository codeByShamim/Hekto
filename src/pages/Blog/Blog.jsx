import React, { useState, useEffect } from 'react';
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo";
import blogData from '../../data/blog/blogData.json';
import { useSearchContext } from '../../context/blog/SearchContext';
import BlogList from '../../components/Blog/BlogPage/BlogList/BlogList';
import Pagination from '../../components/Blog/BlogPage/BlogList/Pagination';
import Sidebar from '../../components/Blog/BlogPage/Sidebar/Sidebar';
import styles from './Blog.module.css';

const BlogPage = () => {
  const { blogs } = blogData;
  const { searchTerm, setSearchTerm } = useSearchContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const postsPerPage = 3;

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchTerm(""); 
    setCurrentPage(1); 
  };

  useEffect(() => {
    setSelectedPostId(null);
  }, [searchTerm]);

  const handleCategoryChange = (category) => {
    resetFilters(); 
    setSelectedCategory(category); 
    setSelectedPostId(null); 
  };

  const handleTagChange = (tag) => {
    resetFilters(); 
    setSelectedTag(tag); 
    setSelectedPostId(null); 
  };

  // Filter blogs based on search term, category, and tag
  const filteredBlogs = blogs.filter((post) => {
    const matchesSearchTerm = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearchTerm && matchesCategory && matchesTag;
  });

  // Sort the filtered blogs by ID (ascending order)
  const sortedBlogs = [...filteredBlogs].sort((a, b) => a.id - b.id);

  // Calculate pagination indices
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  const handleReadMore = (id) => {
    setSelectedPostId(id); 
  };

  return (
    <div>
      <CustomHeader
        title="Blog page"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog page" }]}/>

      <div className={styles.blogPage}>
        <div className={styles.blogPosts}>
          <BlogList 
            currentBlogs={currentBlogs}
            handleReadMore={handleReadMore}
          />

          <Pagination 
            currentPage={currentPage}
            totalPages={Math.ceil(sortedBlogs.length / postsPerPage)}
            paginate={paginate}
          />
        </div>

        <div className={styles.sidebar}>
          <Sidebar
            setCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
            setTag={handleTagChange}
            selectedTag={selectedTag}
            setSelectedPostId={setSelectedPostId} 
          />
        </div>
      </div>

      <GroupLogo />
      <br /><br /><br />
    </div>
  );
};

export default BlogPage;
