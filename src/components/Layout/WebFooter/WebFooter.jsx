// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={`${styles.column} ${styles.firstColumn}`}>
            <div className={styles.logo}>
              <h2>Hekto</h2>
            </div>
            <div className={styles.emailSignup}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Enter Email Address"
              />
              <button className={styles.signupButton}>Sign Up</button>
            </div>
            <div className={styles.contactInfo}>
              <h4>Contact Info</h4>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Categories</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Laptops & Computers</a></li>
              <li><a href="#">Cameras & Photography</a></li>
              <li><a href="#">Smart Phones & Tablets</a></li>
              <li><a href="#">Video Games & Consoles</a></li>
              <li><a href="#">Waterproof Headphones</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Customer Care</h4>
            <ul className={styles.linkList}>
              <li>
                {/* Update My Account link to use react-router Link */}
                <Link to="/login">My Account</Link>
              </li>
              <li><a href="#">Discount</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Orders History</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Pages</h4>
            <ul className={styles.linkList}>
              <li>
              <Link to="/blog">Blog</Link>
              </li>
              <li><a href="#">Browse the Shop</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Pre-Built Pages</a></li>
              <li><a href="#">Visual Composer Elements</a></li>
              <li><a href="#">WooCommerce Pages</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
