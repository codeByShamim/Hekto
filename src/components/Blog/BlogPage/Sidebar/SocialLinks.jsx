import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const SocialLinks = ({ socialLinks, className, showTitle = true }) => {
  return (
    <div className={`${styles.socialLinks} ${className}`}>
      {showTitle && <h4>Follow</h4>} {/* Conditionally render the title */}
      <ul>
        <li>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.facebook}>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.twitter}>
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
