import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./CustomHeader.module.css";

const CustomHeader = ({ title, breadcrumbs }) => {
  return (
    <div className={styles.customHeaderWrap}>
      <div className={styles.customHeader}>
        {/* Top Section with Title */}
        <div className={styles.headerTop}>
          <h1>{title}</h1>
        </div>

        {/* Bottom Section with Breadcrumbs */}
        <div className={styles.headerBottom}>
          <span>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                {breadcrumb.link ? (
                  <Link to={breadcrumb.link} className={styles.navLink}>
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className={styles.myAccount}>{breadcrumb.label}</span>
                )}
                {/* Add a separator if it's not the last breadcrumb */}
                {index < breadcrumbs.length - 1 && <span> . </span>}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for type checking
CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string, // Optional for the last breadcrumb
    })
  ).isRequired,
};

export default CustomHeader;
