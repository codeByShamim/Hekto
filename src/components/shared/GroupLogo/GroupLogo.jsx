import React from 'react';
import groupLogo from './images/group-logo.png'; // Adjusted path for the image inside the same folder
import styles from './GroupLogo.module.css'; // Import the CSS module

const GroupLogo = () => {
  return (
    <div className={styles.groupLogoWrapper}>
      <img
        src={groupLogo}
        alt="Group Logo"
        className={styles.groupLogo}
      />
    </div>
  );
};

export default GroupLogo;
