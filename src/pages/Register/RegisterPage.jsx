import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import GroupLogo from "../../components/shared/GroupLogo/GroupLogo";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <>
      {/* Custom Header */}
      <CustomHeader
        title="Create Account"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Register" }, // Current page without a link
        ]}
      />

      {/* Register Form Section */}
      <div className={styles.registerWrapper}>
        <div className={styles.registerBox}>
          <h2 className={styles.title}>Register</h2>
          <p className={styles.subtitle}>Create a new account for shopping</p>
          <form className={styles.registerForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              className={styles.inputField}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              className={styles.inputField}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className={styles.inputField}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              className={styles.inputField}
              onChange={handleChange}
            />
            <textarea
              name="address"
              value={formData.address}
              placeholder="Shipping Address"
              className={styles.inputField}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className={styles.registerButton}>Register</button>
          </form>
          <div className={styles.loginLink}>
            Already have an account?{" "}
            <Link to="/login" className={styles.loginLink}>
              Login here
            </Link>
          </div>
        </div>

        {/* Group Logo */}
        <GroupLogo />
      </div>
    </>
  );
};

export default RegisterPage;
