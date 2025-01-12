import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader"; // Import the reusable CustomHeader component
import styles from "./LoginPage.module.css"; // Import styles for LoginPage
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo"; // Import the GroupLogo component

const LoginPage = () => {
  return (
    <>
      {/* Custom Header */}
      <CustomHeader
        title="My Account"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Page", link: "/page" },
          { label: "My Account" }, // Current page without a link
        ]}
      />

      {/* Login Form Section */}
      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Login</h2>
          <p className={styles.subtitle}>Please login using account details below.</p>
          <form className={styles.loginForm}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
            <button className={styles.loginButton}>Sign In</button>
            <div className={styles.options}>
              {/* Replace <a> with <Link> */}
              <Link to="/forgot-password" className={styles.forgotPassword}>
                Forgot your password?
              </Link>
            </div>
          </form>
          <div className={styles.signupLink}>
            Don't have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Create Account
            </Link>
          </div>
        </div>

        {/* Reuse the GroupLogo Component */}
        <GroupLogo />
      </div>
    </>
  );
};

export default LoginPage;
