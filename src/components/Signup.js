import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "../styles/loginStyles";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:9091/api/auth/register`, {
        username,
        email,
        passwordHash,
      });
      navigate("/");
      // navigate(`/user/${response.data}/favourites`);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Signup</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
