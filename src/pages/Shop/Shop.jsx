import React, { useState, useEffect } from 'react';
import CustomHeader from '../../components/shared/CustomHeader/CustomHeader'; 
import ShopHeader from '../../components/Shop/ShopHeader/ShopHeader';  
import ShopContainer from '../../components/Shop/ShopContainer/ShopContainer'; 
import productsData from '../../data/products/products.json'; 
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo";

const Shop = () => {
  const [view, setView] = useState('grid'); // State to manage view (grid/list)
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const [products, setProducts] = useState([]); // State to store product data
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortOrder, setSortOrder] = useState("bestmatch"); // State for sort order
  const [productsPerPage, setProductsPerPage] = useState(12); // State for products per page

  // Fetch products data when the component mounts
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products based on the selected sort order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'priceasc') {
      return a.price - b.price;
    }
    if (sortOrder === 'pricedesc') {
      return b.price - a.price;
    }
    return 0; // Best match (no sorting)
  });

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  // Update CustomHeader title based on view
  const customHeaderTitle = view === 'grid' ? "Shop Grid Default" : "Shop List View";

  return (
    <>
      {/* Custom Header */}
      <CustomHeader
        title={customHeaderTitle}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Pages", link: "/pages" },
          { label: customHeaderTitle },
        ]}
      />

      {/* Shop Header */}
      <ShopHeader 
        setView={setView}
        view={view}
        setSearchQuery={setSearchQuery}
        setSortOrder={setSortOrder}
        setProductsPerPage={setProductsPerPage}
      />

      {/* ShopContainer */}
      <ShopContainer
        view={view}
        products={visibleProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {/* GroupLogo */}
      <GroupLogo />
    </>
  );
};

export default Shop;
