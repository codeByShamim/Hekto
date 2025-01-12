import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { SearchProvider } from './context/blog/SearchContext';

import blogData from './data/blog/blogData.json'; // Ensure this path is correct

// Importing pages and components
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ForgotPassword from './pages/Login/ForgotPassword';
import RegisterPage from './pages/Register/RegisterPage'; 
import FaqPage from './pages/FaqPage/FaqPage';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import SingleBlogPage from './components/Blog/SingleBlogPage/SingleBlogPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// E-commerce related imports
import Shop from './pages/Shop/Shop';  // Importing your Shop page

import Layout from './components/Layout/Layout';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="hekto-website-wrapper">
      <Router>
        <SearchProvider>
          <Layout>
            <ScrollToTop />
            <Routes>
              {/* Home and General Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<SingleBlogPage blogs={blogData.blogs} />} />
              
              {/* E-commerce Shop Pages */}
              <Route path="/shop" element={<Shop />} /> 

              {/* Fallback for not found pages */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;
