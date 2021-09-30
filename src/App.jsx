import React from 'react';
import './App.css';
import HotelBlocks from './components/HotelsBlock';
import data from './components/data';

function App() {
  return (
    <section className="homes">
      <h1 className="homes__h1">Homes guests loves</h1>
      <HotelBlocks data={data} />
    </section>
  );
}

export default App;
