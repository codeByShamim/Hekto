import React from "react";
import styles from "./ShopexOffer.module.css";

/* ShopexOffer Component - Displays a list of promotional offers, including title, icon, and description */
const ShopexOffer = () => {
  // Array of offers - each object contains icon, title, and description for an offer
  const offers = [
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
    /* Main ShopexOffer Container - Contains the heading and offer cards */
    <div className={styles.shopexOffer}>
      {/* Component Heading */}
      <h2 className={styles.heading}>What Shopex Offer!</h2>
      
      {/* Container for Offer Cards */}
      <div className={styles.offerContainer}>
        {offers.map((offer, index) => (
          /* Individual Offer Card - Displays icon, title, and description */
          <div key={index} className={styles.offerCard}>
            <img src={offer.icon} alt={offer.title} className={styles.offerIcon} />
            <h3 className={styles.offerTitle}>{offer.title}</h3>
            <p className={styles.offerDescription}>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
