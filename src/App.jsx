import React, { useState, useEffect } from 'react';

import './App.css';

import Top from './components/TopSection';
import AvailableHotels from './components/Available';
import HomesHotels from './components/Homes';

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((resonce) => resonce.json())
      .then((json) => {
        setHotels(json);
      });
  }, []);

  return (
    <>
      <Top setHotels={setHotels} />
      {hotels?.length >= 1 && <AvailableHotels hotels={hotels} />}
      <HomesHotels hotels={hotels} />
    </>
  );
}

export default App;
