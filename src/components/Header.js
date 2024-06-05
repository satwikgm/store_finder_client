import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>
      <h1>Storefinder App</h1>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#2196F3",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
};

export default Header;
