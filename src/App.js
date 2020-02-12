import React from 'react';
import norwayMap from './img/norway-map.png';
import './App.css';
import Seasons from './components/Seasons';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Seasons/>
      </div>
    </div>
  );
}

export default App;
