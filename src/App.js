// src/App.js
import React from 'react';
import UsersList from './components/UsersList';
// import FavoriteStores from './components/FavoriteStores';
import SearchStores from './components/SearchStores';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Store Locator</h1>
      </header>
      <main>
        <UsersList />
        {/* <FavoriteStores userId="60c72b2f4f1a4e3d5c3e9f1a" /> */}
        {/* <SearchStores /> */}
      </main>
    </div>
  );
}

export default App;
