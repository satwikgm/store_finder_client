import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from '../styles/favoriteStoresStyles';

const FavoriteStores = ({ userId }) => {
  const [stores, setStores] = useState([]);
  console.log('userId: ',userId);

  const loadUsersFavourite = async() => {
    const result = 
        await axios.get(`http://localhost:9091/api/auth/${userId}/favorites`);
    console.log("Hi",result);
    setStores(result.data);
  }

  useEffect(() => {
    loadUsersFavourite();
  }, []);

  console.log("dummy: ",stores);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Favorite Stores</h2>
      {stores.length > 0 ? (
        <div style={styles.grid}>
          {stores.map((store) => (
            <div key={store.id} style={styles.gridItem}>
              <div style={styles.storeName}>{store.name}</div>
              <div style={styles.storeImage}></div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not stored any favorite stores currently</p>
      )}
      <h3 style={styles.subHeader}>
        Click <Link to={`/user/${userId}/search`} style={styles.link}>here</Link> to view all stores
      </h3>
    </div>
  );
};

export default FavoriteStores;
