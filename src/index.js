import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from './components/UserProfile';
import SignupPage from './components/Signup';
import SearchStores from './components/SearchStores';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:userId/favourites",
    element: <UserProfile />,
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/user/:userId/search",
    element: <SearchStores />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
