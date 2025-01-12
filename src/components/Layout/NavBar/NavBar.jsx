import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import { FaAngleDown } from 'react-icons/fa'; // Importing the angle down icon
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import styles from './NavBar.module.css'; // Import the CSS module

export default function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        {/* Logo Section */}
        <div className={styles.navbarLeft}>
          {/* Logo text */}
          <span className={styles.logo}>Hekto</span>

          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            {/* Home link with angle icon */}
            <li className={styles.navItem + ' ' + styles.homeLink}>
            <Link to="/" className={styles.navLink}>Home</Link>              {/* Angle down icon next to the Home link */}
              <FaAngleDown className={styles.angleIcon} />
            </li>

            {/* Other navigation links */}
            <li>
              <a href="#pages" className={styles.navLink}>Pages</a>
            </li>
            <li>
              <a href="#products" className={styles.navLink}>Products</a>
            </li>
            <li>
              <Link to="/blog" className={styles.navLink}>Blog</Link>
            </li>
            <li>
              <Link to="/shop" className={styles.navLink}>Shop</Link>
            </li>

            {/* Replace the "Contact" link with a Link component */}
            <li>
              <Link to="/contact-us" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Search Section */}
        <div className={styles.navbarRight}>
          {/* Search input container */}
          <div className={styles.searchContainer}>
            {/* Search input field */}
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            {/* Search icon wrapper */}
            <span className={styles.searchIconWrapper}>
              {/* Search icon */}
              <FaSearch className={styles.searchIcon} />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
