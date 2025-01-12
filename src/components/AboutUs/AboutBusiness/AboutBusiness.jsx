import React from "react";
import styles from "./AboutBusiness.module.css"; // Import CSS module
import businessImage from "./images/about-business.png"; // Import the image

const AboutBusiness = () => {
  return (
    <div className={styles.aboutBusiness}>
      <div className={styles.container}>
        {/* Left Column - Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div> {/* Background div */}
          <img
            src={businessImage}
            alt="About Business"
            className={styles.image}
          />
        </div>

        {/* Right Column - Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>Know About Our Ecommerce Business, History</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque 
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique 
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis 
            quis bibendum quam.
          </p>
          <button className={styles.contactBtn}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
