import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import styles from "../styles/loginStyles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let flag = false;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9091/api/auth/login`,
        { email, passwordHash }
      );
      console.log("Login successful:", response);
      navigate(`/user/${response.data}/favourites`);
    } catch (error) {
      flag = true;
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
        <div style={styles.errorContainer}>
          {{error} ? <p style={styles.errorText}>{error}</p> : {}}
          <p>Click here to <Link to="/signup" style={styles.link}>Signup</Link></p>
        </div>
    </div>
  );
};

export default LoginPage;
