import React from 'react';
import Swype from './components/Swype';
import { cards } from './cards/cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Swype cards={cards} />
    </div>
  );
}

export default App;
