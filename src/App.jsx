import React, { useState } from 'react';

import './App.css';

import Top from './components/TopSection';
import AvailableHotels from './components/Available';
import HomesHotels from './components/Homes';

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
