
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StatsTable } from './components/StatsTable';
import { PlayerCarousel } from './components/PlayerCarousel';

function App() {
  return (
      <div className = "App">
        <header>
          NFL 2020 Fantasy Leaders
        </header>
        <StatsTable/>
      </div>
  );
}

export default App;
