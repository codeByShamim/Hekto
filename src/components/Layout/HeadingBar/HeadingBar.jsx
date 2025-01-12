import React from 'react';
import { FaEnvelope, FaPhone, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa'; // Import FontAwesome icons
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
import styles from './HeadingBar.module.css'; // Import CSS module for styling

export default function HeadingBar() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className={styles.headingBarWrapper}> {/* Wrapper with full width */}
      <div className={styles.headingBar}>
        {/* Left section: Contact information */}
        <div className={styles.headingBarLeft}>
          <span className={styles.contactItem}>
            <FaEnvelope className={styles.icon} /> hektofurniture@outlook.com
          </span>
          <span className={styles.contactItem}>
            <FaPhone className={styles.icon} /> (12345)67890
          </span>
        </div>

        {/* Right section: Language, currency, and user options */}
        <div className={styles.headingBarRight}>
          <select className={styles.menuSelect} defaultValue="English">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>

          <select className={styles.menuSelect} defaultValue="USD">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>

          {/* Login link with user icon */}
          <span
            className={styles.menuItem}
            onClick={handleLoginClick} // Add click handler for navigation
            role="button" // Indicate that this is clickable for accessibility
            tabIndex={0} // Make it focusable for accessibility
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleLoginClick(); // Handle Enter key for accessibility
            }}
          >
            Login <FaUser className={styles.icon} />
          </span>

          <span className={styles.menuItem}>
            Wishlist <FaHeart className={styles.icon} />
          </span>
          <span className={styles.menuItem}>
            <FaShoppingCart className={styles.icon} />
          </span>
        </div>
      </div>
    </div>
  );
}
