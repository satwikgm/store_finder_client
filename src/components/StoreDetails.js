import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StoreDetails = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9091/api/stores/${storeId}`
        );
        setStore(response.data);
      } catch (error) {
        console.error("Error fetching store details:", error);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (!store) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.storeName}>{store.name}</h2>
      <img
        src={
          store.logoImageUrl ||
          "https://via.placeholder.com/300x200?text=Store+Image"
        }
        alt={store.name}
        style={styles.storeImage}
      />
      <div style={styles.detailsContainer}>
        <p style={styles.description}>{store.description}</p>
        <p style={styles.details}>
          <strong>Address:</strong> {store.address}
        </p>
        <p style={styles.details}>
          <strong>Contact:</strong> {store.contactDetails}
        </p>
        <p style={styles.details}>
          <strong>Operating Hours:</strong> {store.operatingHours}
        </p>
      </div>
      <h3 style={styles.productsHeader}>Products</h3>
      <ul style={styles.productsList}>
        {store.products.map((product) => (
          <li key={product.id} style={styles.productItem}>
            <h4 style={styles.productName}>{product.name}</h4>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f8ff", // Light blue background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  storeName: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: "20px",
    color: "#0073e6", // Blue color
  },
  storeImage: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  detailsContainer: {
    padding: "20px",
    backgroundColor: "#e6f7ff", // Light blue background for details section
    borderRadius: "8px",
    marginTop: "20px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "20px",
    color: "#005bb5", // Darker blue for text
  },
  details: {
    fontSize: "1em",
    marginBottom: "10px",
    color: "#003d99", // Even darker blue for details
  },
  productsHeader: {
    fontSize: "1.5em",
    marginTop: "30px",
    marginBottom: "20px",
    color: "#0073e6", // Blue color
  },
  productsList: {
    listStyleType: "none",
    padding: "0",
  },
  productItem: {
    border: "1px solid #b3d9ff", // Light blue border
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#ffffff", // White background for product items
  },
  productName: {
    fontSize: "1.2em",
    margin: "0 0 10px 0",
    color: "#0073e6", // Blue color for product name
  },
  productDescription: {
    fontSize: "1em",
    margin: "0 0 10px 0",
    color: "#005bb5", // Darker blue for product description
  },
  productPrice: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#003d99", // Even darker blue for product price
  },
  loading: {
    textAlign: "center",
    fontSize: "1.5em",
    padding: "20px",
    color: "#0073e6", // Blue color for loading text
  },
};

export default StoreDetails;
