import React from 'react';
import './App.css';

import Header from './components/header/Header';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
