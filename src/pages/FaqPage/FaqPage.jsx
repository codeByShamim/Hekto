import React from 'react';
import styles from './FaqPage.module.css';
import CustomHeader from '../../components/shared/CustomHeader/CustomHeader'; // Adjust the path based on your project structure
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo"; // Import the GroupLogo component


const FaqPage = () => {
  return (
    <>
      {/* Custom Header */}
      <CustomHeader
        title="FAQ"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Pages", link: "/" },
          { label: "Faq" }, // Current page without a link
        ]}
      />
      <div className={styles.faqPage}>
        {/* Left Column: General Information */}
        <div className={styles.leftColumn}>
          <h2 className={styles.sectionTitle}>General Information</h2>

          {/* FAQ Items */}
          <div className={styles.faqItem}>
            <h3 className={styles.question}>What is the return policy?</h3>
            <p className={styles.answer}>
              You can return items within 30 days of purchase. Ensure that items are unused and in their original packaging.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.question}>How can I track my order?</h3>
            <p className={styles.answer}>
              Once your order is shipped, you will receive a tracking number via email to monitor your delivery status.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.question}>Do you ship internationally?</h3>
            <p className={styles.answer}>
              Yes, we ship to many countries worldwide. Shipping fees and times vary depending on your location.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.question}>How can I contact support?</h3>
            <p className={styles.answer}>
              You can contact our support team via the "Ask a Question" form or email us directly at support@example.com.
            </p>
          </div>
        </div>

        {/* Right Column: Ask a Question Form */}
        <div className={styles.rightColumn}>
          <h2 className={styles.sectionTitle}>Ask a Question</h2>
          <form className={styles.questionForm}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Subject"
              className={styles.inputField}
            />
            <textarea
              placeholder="Type your message"
              className={styles.textArea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Send Mail
            </button>
          </form>
        </div>
      </div>
        {/* Reuse the GroupLogo Component */}
        <GroupLogo />
    </>
  );
};

export default FaqPage;
