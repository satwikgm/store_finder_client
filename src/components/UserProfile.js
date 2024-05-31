import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import FavoriteStores from './FavoriteStores';
import SearchStores from './SearchStores';
import axios from 'axios';

const UserProfile = () => {
  const { userId } = useParams();
  console.log("abc: ",userId);
  const [user,setUser] = useState('');

  const fetchUserFromId = async () => {
    const result = await axios.get("http://localhost:9091/api/users");
    const desiredUser = result.data.find(user => user.id === userId);
    setUser(desiredUser.username);
    console.log("desire: ",desiredUser.username);
  }

  useEffect(() => {
    fetchUserFromId();
  }, [userId]);

  return (
    <div>
      <h1>User Profile: {user}</h1>
      {/* <FavoriteStores userId={userId} /> */}
      <SearchStores userId={userId} />
    </div>
  );
};

export default UserProfile;
