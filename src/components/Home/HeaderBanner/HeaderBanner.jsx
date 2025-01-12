import React from 'react';
import styles from './HeaderBanner.module.css'; // Import custom styles
import sofaImage from './images/sofa-promotional-header.png'; // Import the right-side image
import image32 from './images/image-32.png'; // Import the new left-side image

export default function HeaderBanner() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContent}>
        {/* Left side with image-32 */}
        <div className={styles.imageContentLeft}>
          <img
            src={image32} // Use the new left-side image
            alt="Furniture Left Side"
            className={styles.bannerImage}
          />
          {/* Adding the dot at the bottom */}
          <div className={styles.bottomDot}></div>
        </div>

        {/* Right side with text content and the sofa image */}
        <div className={styles.textContent}>
          {/* Best Furniture text with small size and #FB2E86 color */}
          <h3 className={styles.smallText}>Best Furniture For Your Castle...</h3> <br />
          
          {/* Big heading text for the collection */}
          <h1 className={styles.largeText}>New Furniture Collection Trends in 2024</h1>
          
          {/* Paragraph */}
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p> <br />
          
          {/* Shop Now button */}
          <button className={styles.shopButton}>Shop Now</button>
        </div>

        {/* Right side image (sofaImage) */}
        <div className={styles.imageContentRight}>
          <img
            src={sofaImage} // Keep the existing right-side image
            alt="Furniture Right Side"
            className={styles.bannerImage}
          />
        </div>
      </div>

      {/* Three circle dots at the bottom center */}
      <div className={styles.dotsContainer}>
        <div className={styles.squareDotFill}></div>
        <div className={styles.squareDotSolid}></div>
        <div className={styles.squareDotSolid}></div>
      </div>
    </div>
  );
}
