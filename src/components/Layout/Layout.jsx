// src/components/Layout/Layout.js
import React from 'react';
import HeadingBar from './HeadingBar/HeadingBar';
import NavBar from './NavBar/NavBar';
import Footer from './WebFooter/WebFooter';
import FooterBottom from './FooterBottom/FooterBottom';

const Layout = ({ children }) => {
  return (
    <>
      {/* Common Header and Navigation */}
      <HeadingBar />
      <NavBar />
      
      {/* Page-specific content */}
      <main>{children}</main>

      {/* Common Footer */}
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
