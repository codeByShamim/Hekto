import React from 'react';
import CustomHeader from '../../components/shared/CustomHeader/CustomHeader'; // Import your custom header component
import notFoundImage from './images/not-found-image.png'; // Your image in the NotFoundPage folder
import styles from './NotFoundPage.module.css'; // Import your CSS module
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo"; // Import the GroupLogo component


const NotFoundPage = () => {
  return (
    <div>
      {/* Custom Header for the 404 Page */}
      <CustomHeader
        title="404 Not Found"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: "Page", link: "/page" },
          { label: '404 Not Found' },
        ]}
      />

      {/* Image for Not Found */}
      <div className={styles.imageWrapper}>
        <img
          src={notFoundImage}
          alt="Page Not Found"
          className={styles.image}
        />
      </div>

      {/* Back to Home Button */}
      <div className={styles.buttonWrapper}>
        <a href="/" className={styles.backToHomeBtn}>
          Back to Home
        </a>
      </div>

     {/* Reuse the GroupLogo Component */}
     <GroupLogo />
     
    </div>
  );
};

export default NotFoundPage;
