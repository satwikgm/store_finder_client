import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from './components/UserProfile';
import StoreDetails from './components/StoreDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:userId",
    element: <UserProfile />,
  },
  {
    path: "/stores/:storeId",
    element: <StoreDetails />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
