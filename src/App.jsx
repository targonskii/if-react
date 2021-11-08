import React, { useState, useEffect } from 'react';

import './App.css';

import Top from './components/TopSection';
import AvailableHotels from './components/Available';
import HomesHotels from './components/Homes';

function App() {
  const [hotels, setHotels] = useState([]);
  const [searchHotels, setSearch] = useState('');
  const [availableHotels, setAvailable] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((resonce) => resonce.json())
      .then((json) => {
        setHotels(json);
      });
  }, []);

  useEffect(() => {
    const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
    url.searchParams.set('search', `${searchHotels}`);
    fetch(`${url}`)
      .then((resonce) => resonce.json())
      .then((json) => {
        setAvailable(json);
      });
  });

  return (
    <>
      <Top searchHotels={searchHotels} setSearch={setSearch} />
      {hotels?.length >= 1 && <AvailableHotels availableHotels={availableHotels} />}
      <HomesHotels hotels={hotels} />
    </>
  );
}

export default App;
