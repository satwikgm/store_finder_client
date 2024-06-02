import React, { useEffect, useState } from 'react';
import FavoriteStores from './FavouriteStores';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { userId } = useParams();

  const [user,setUser] = useState('');

  const fetchUserFromId = async () => {
    const result = await axios.get("http://localhost:9091/api/auth");
    const desiredUser = result.data.find(user => user.id === userId);
    setUser(desiredUser.username);
    console.log("desire: ",desiredUser.username);
  }

  useEffect(() => {
    fetchUserFromId();
  }, [userId]);

  return (
    <div>
      <h2>UserName: {user}</h2>
      <FavoriteStores userId={userId}/>
    </div>
  );
}

export default UserProfile;