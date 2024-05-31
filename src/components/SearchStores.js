import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteStores from './FavoriteStores'; // Import FavoriteStores component
import { Link } from 'react-router-dom';

const SearchStores = ({ userId }) => {
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
        const response = await axios.get(`http://localhost:9091/api/users/${userId}/favorites`);
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
    try {
      if (!isFavorite) {
        await axios.post(`http://localhost:9091/api/users/${userId}/favorites/${storeId}`);
      } else {
        await axios.delete(`http://localhost:9091/api/users/${userId}/favorites/${storeId}`);
      }
      // Update favorite stores after toggling
      const response = await axios.get(`http://localhost:9091/api/users/${userId}/favorites`);
      setFavoriteStores(response.data);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <div>
      <h2>Search Stores</h2>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="Enter keyword"
      />
      <ul>
        {filteredStores.map(store => (
          <li key={store.id}>
            <input
              type="checkbox"
              checked={favoriteStores.some(favorite => favorite.id === store.id)}
              onChange={() => toggleFavorite(store.id)}
            />
            <Link to={`/stores/${store.id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
      <FavoriteStores userId={userId} favoriteStores={favoriteStores} />
    </div>
  );
};

export default SearchStores;
