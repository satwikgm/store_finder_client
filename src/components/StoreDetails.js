import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StoreDetails = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:9091/api/stores/${storeId}`);
        setStore(response.data);
      } catch (error) {
        console.error('Error fetching store details:', error);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{store.name}</h2>
      <p>{store.description}</p>
      <p>Address: {store.address}</p>
      <p>Contact: {store.contactDetails}</p>
      <p>Operating Hours: {store.operatingHours}</p>
      <img src={store.logoImageUrl} alt={store.name} />
      <h3>Products</h3>
      <ul>
        {store.products.map(product => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreDetails;
