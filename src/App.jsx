import React, { useState } from 'react';

import './App.css';

import Top from './components/TopSection/Index';
import AvailableHotels from './components/Available/Index';
import HomesHotels from './components/Homes/Index';

function App() {
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <Top setHotels={setHotels} />
      {hotels?.length >= 1 && <AvailableHotels hotels={hotels} />}
      <HomesHotels />
    </>
  );
}

export default App;
