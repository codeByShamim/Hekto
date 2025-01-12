import React from "react";
import styles from "./OurFeatures.module.css"; // Updated the CSS module import

const OurFeatures = () => {
  const features = [
    {
      icon: "/icons/delivery.png",
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders over $50.",
    },
    {
      icon: "/icons/cashback.png",
      title: "Cash Back",
      description: "Get up to 10% cashback on your purchases.",
    },
    {
      icon: "/icons/premium-quality.png",
      title: "Premium Quality",
      description: "We ensure the best quality in every product.",
    },
    {
      icon: "/icons/support.png",
      title: "24/7 Support",
      description: "Our team is here to help you any time.",
    },
  ];

  return (
    <div className={styles.ourFeatures}>
      <h2 className={styles.heading}>Our Features</h2>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <img
              src={feature.icon}
              alt={feature.title}
              className={styles.featureIcon}
            />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
