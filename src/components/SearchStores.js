import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import styles from '../styles/searchStoresStyles'; // Import the new styles


const SearchStores = () => {
	const {userId} = useParams();
  const [keyword, setKeyword] = useState('');
  const [allStores, setAllStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [favoriteStores, setFavoriteStores] = useState([]);

  useEffect(() => {
    const fetchAllStores = async () => {
      try {
        const response = await axios.get('http://localhost:9091/api/stores');
        setAllStores(response.data);
        setFilteredStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchAllStores();
  }, []);

  useEffect(() => {
    const fetchFavoriteStores = async () => {
      try {
        const response = await axios.get(`http://localhost:9091/api/auth/${userId}/favorites`);
        setFavoriteStores(response.data);
      } catch (error) {
        console.error('Error fetching favorite stores:', error);
      }
    };

    fetchFavoriteStores();
  }, [userId]);

  const handleSearch = (e) => {
    const searchKeyword = e.target.value.toLowerCase();
    setKeyword(searchKeyword);
    const filtered = allStores.filter(store =>
      store.name.toLowerCase().includes(searchKeyword)
    );
    setFilteredStores(filtered);
  };

  const toggleFavorite = async (storeId) => {
    const isFavorite = favoriteStores.some(store => store.id === storeId);
		console.log("abcde:",isFavorite);	
    try {
      if (!isFavorite) {
        await axios.post(`http://localhost:9091/api/auth/${userId}/favorites/${storeId}`);
      } else {
        await axios.delete(`http://localhost:9091/api/auth/${userId}/favorites/${storeId}`);
      }
      // Update favorite stores after toggling
      const response = await axios.get(`http://localhost:9091/api/auth/${userId}/favorites`);
      setFavoriteStores(response.data);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };
	console.log("dummy: ",allStores,favoriteStores);

	const getButtonText = (storeId) => {
    return favoriteStores.some(favorite => favorite.id === storeId) ? 'Remove from fav' : 'Mark as fav';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Search Stores</h2>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="Enter keyword"
        style={styles.input}
      />
      <div style={styles.grid}>
        {filteredStores.map(store => (
          <div key={store.id} style={styles.gridItem}>
            <div style={styles.storeName}>{store.name}</div>
            <img src="https://via.placeholder.com/150" alt="Store" style={styles.storeImage} />
            <Link to={`/stores/${store.id}`} style={styles.link}>{store.name}</Link>
						<button
              onClick={() => toggleFavorite(store.id)}
              style={favoriteButtonStyles(favoriteStores.some(favorite => favorite.id === store.id))}
            >
              {getButtonText(store.id)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const favoriteButtonStyles = (isFavorite) => ({
  background: isFavorite ? '#f44336' : '#2196F3', // Red if favorited, blue if not
  color: '#fff', // White text color
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  outline: 'none',
  marginTop: '10px', // Add margin for spacing
});

export default SearchStores;
