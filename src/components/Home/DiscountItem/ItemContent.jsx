import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon from react-icons
import styles from './ItemContent.module.css'; // Import CSS styles for the component

// ItemContent Component that takes props for the content details
const ItemContent = ({ title, smallTitle, description, image, details }) => {
  return (
    <div className={styles.item}> {/* Main container for the item */}
      <div className={styles.itemContent}> {/* Wrapper for the left and right sides */}
        <div className={styles.leftSide}> {/* Left side of the content (text and details) */}
          <h3>{title}</h3> {/* Main title of the item */}
          <h4>{smallTitle}</h4> {/* Subheading or small title for the item */}
          <p>{description}</p> {/* Description of the item */}
          
          <div className={styles.details}> {/* Container for the details list */}
            {details.map((line, index) => ( 
              <div key={index} className={styles.detailItem}> {/* Mapping over details */}
                <span className={styles.icon}><FaCheck /></span> {/* Checkmark icon next to each detail */}
                <p>{line}</p> {/* Text for each detail */}
              </div>
            ))}
          </div>
          
          <button className={styles.shopNow}>Shop Now</button> {/* Button to "Shop Now" */}
        </div>

        <div className={styles.rightSide}> {/* Right side of the content (image) */}
          <img src={image} alt={title} className={styles.itemImage} /> {/* Item image */}
        </div>
      </div>
    </div>
  );
};

export default ItemContent; // Export the component for use in other parts of the app
