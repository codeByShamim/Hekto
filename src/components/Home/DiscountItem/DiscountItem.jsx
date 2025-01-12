import React, { useState } from 'react';
import ItemContent from './ItemContent'; // Import the ItemContent component
import styles from './DiscountItems.module.css';

// Import images from the images folder
import sofaCollectionImage from './images/sofa-collection.png';
import woodChairImage from './images/wood-chair.png';

const DiscountItems = () => {
  // Set initial selected item to woodChair
  const [selectedItem, setSelectedItem] = useState('woodChair');

  const items = {
    woodChair: {
      title: "20% Discount Of All Products",
      smallTitle: "Eams Sofa Compact",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
      image: sofaCollectionImage, // Use the imported image
      details: ["Material expose like metals", "Simple neutral colours.", "Clear lines and geometric figures", "Material expose like metals"]
    },
    plasticChair: {
      title: "Plastic Chair",
      smallTitle: "Versatile Plastic Chair",
      description: "A lightweight, easy-to-move chair with contemporary design for any room.",
      image: woodChairImage, // Use the imported image
      details: ["Lightweight", "Easy to clean", "Modern design", "Affordable price"]
    },
    sofaCollection: {
      title: "Sofa Collection",
      smallTitle: "Luxury Sofa Set",
      description: "Upgrade your living room with this elegant and comfortable sofa collection.",
      image: sofaCollectionImage, // Use the imported image
      details: ["Soft cushions", "Stylish design", "Spacious seating", "Durable fabric"]
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);  // Set selected item when button is clicked
  };

  return (
    <div className={styles.discountItems}>
      <h2 className={styles.heading}>Discount Item</h2>
      <div className={styles.buttonContainer}>
        {/* Apply active class to the clicked button */}
        <button 
          onClick={() => handleItemClick('woodChair')} 
          className={`${styles.btn} ${selectedItem === 'woodChair' ? styles.activeBtn : ''}`}
        >
          Wood Chair
        </button>
        <button 
          onClick={() => handleItemClick('plasticChair')} 
          className={`${styles.btn} ${selectedItem === 'plasticChair' ? styles.activeBtn : ''}`}
        >
          Plastic Chair
        </button>
        <button 
          onClick={() => handleItemClick('sofaCollection')} 
          className={`${styles.btn} ${selectedItem === 'sofaCollection' ? styles.activeBtn : ''}`}
        >
          Sofa Collection
        </button>
      </div>

      {/* Render the selected item content */}
      {selectedItem && (
        <ItemContent 
          title={items[selectedItem].title}
          smallTitle={items[selectedItem].smallTitle}
          description={items[selectedItem].description}
          image={items[selectedItem].image}
          details={items[selectedItem].details}
        />
      )}
    </div>
  );
};

export default DiscountItems;
