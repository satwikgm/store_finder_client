import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoriteStores = ({ userId }) => {
  const [stores, setStores] = useState([]);

  const loadUsersFavourite = async() => {
    const result = 
        await axios.get(`http://localhost:9091/api/users/${userId}/favorites`);
    setStores(result.data);
  }

  useEffect(() => {
    loadUsersFavourite();
  }, [userId]);

  return (
    <div>
      <h2>Favorite Stores</h2>
      <ul>
        {stores.map(store => (
          <li key={store.id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteStores;
