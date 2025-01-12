import React from 'react';
import styles from './ContactUs.module.css'; // CSS module for styles
import CustomHeader from '../../components/shared/CustomHeader/CustomHeader'; // Adjust the path based on your project structure
import contactImage from './images/contact-image.png';

export default function ContactUs() {
    return (
      <>
        {/* Custom Header */}
        <CustomHeader
          title="Contact Us"
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "Pages", link: "/" },
            { label: "Contact Us" }, // Current page without a link
          ]}
        />
  
        <div className={styles.container}>
          <div className={styles.row}>
            {/* First Column: Information About Us */}
            <div className={styles.column}>
              <h2 className={styles.title}>Information About Us</h2>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
                Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
  
              {/* Three dots with colors */}
              <div className={styles.dots}>
                <span className={styles.dot} style={{ backgroundColor: '#5625DF' }}></span>
                <span className={styles.dot} style={{ backgroundColor: '#FF27B7' }}></span>
                <span className={styles.dot} style={{ backgroundColor: '#37DAF3' }}></span>
              </div>
            </div>
  
            {/* Second Column: Contact Way */}
            <div className={styles.column}>
              <h2 className={styles.title}>Contact Way</h2>
  
              {/* Contact Information */}
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.dot} style={{ backgroundColor: '#5726DF' }}></span>
                  <div className={styles.contactText}>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.dot} style={{ backgroundColor: '#FB2E86' }}></span>
                  <div className={styles.contactText}>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.dot} style={{ backgroundColor: '#FFB265' }}></span>
                  <div className={styles.contactText}>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.dot} style={{ backgroundColor: '#1BE982' }}></span>
                  <div className={styles.contactText}>
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                  </div>
                </div>
              
               
              </div>
            </div>
          </div>
  
          {/* Second Row: Form and Image */}
          <div className={styles.row}>
            <div className={styles.column}>
              {/* Get In Touch Section */}
              <h2 className={styles.contactTitle}>Get In Touch</h2>
              <p className={styles.contactDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis quis bibendum quam.
              </p>
  
              {/* Contact Form */}
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input type="text" placeholder="Your Name*" className={styles.input} />
                  <input type="email" placeholder="Your Email" className={styles.input} />
                </div>
  
                <input type="text" placeholder="Subject*" className={styles.input} />
                <textarea placeholder="Type your message*" className={styles.textarea}></textarea>
                
                <button type="submit" className={styles.sendBtn}>Send Mail</button>
              </form>
            </div>
  
            <div className={styles.column}>
              <img src={contactImage} alt="Contact Us" className={styles.contactImage} />
            </div>
          </div>
        </div>
      </>
    );
  }
  