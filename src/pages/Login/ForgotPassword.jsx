import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo";
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  console.log('ForgotPassword Component Rendered');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      setMessage('If this email exists in our system, you will receive a password reset link shortly.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <>
      <CustomHeader
        title="Forgot Your Password?"
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Forgot Password' }]}
      />
      <div className={styles.forgotPasswordWrapper}>
        <div className={styles.forgotPasswordBox}>
          <h2 className={styles.title}>Forgot Your Password?</h2>
          <p className={styles.subtitle}>Enter your email address and we'll send you a link to reset your password.</p>
          
          {/* Form */}
          <form className={styles.forgotPasswordForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.resetButton}>Send Reset Link</button>
          </form>

          {message && <div className={styles.message}>{message}</div>}
          
          <div className={styles.loginLink}>
            Remembered your password?{' '}
            <Link to="/login" className={styles.loginLink}>
              Login here
            </Link>
          </div>
        </div>

        <GroupLogo />
      </div>
    </>
  );
};

export default ForgotPassword;
