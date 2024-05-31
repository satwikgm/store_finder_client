import React from 'react';
import { useParams } from 'react-router-dom';
// import FavoriteStores from './FavoriteStores';
import SearchStores from './SearchStores';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      {/* <FavoriteStores userId={userId} /> */}
      <SearchStores userId={userId} />
    </div>
  );
};

export default UserProfile;
