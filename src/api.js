import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api';

// export const getAllUsers = async () => {
//   const result = await axios.get(`${API_BASE_URL}/users`);
//   return result.data;
// };

// const loadUsers = async() => {
//     const result = await axios.get("http://localhost:9091/api/users");
//     console.log(result.data);
//     setUsers(result.data);
//   }

export const getUserFavorites = (userId) => {
  return axios.get(`${API_BASE_URL}/users/${userId}/favorites`);
};

export const addUserFavorite = (userId, storeId) => {
  return axios.post(`${API_BASE_URL}/users/${userId}/favorites/${storeId}`);
};

export const searchStores = (keyword) => {
  return axios.get(`${API_BASE_URL}/stores`, {
    params: { keyword }
  });
};

export const getStoreDetails = (storeId) => {
  return axios.get(`${API_BASE_URL}/stores/${storeId}`);
};
