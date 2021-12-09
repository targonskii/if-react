import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Top from './components/TopSection';
import AvailableHotels from './components/AvailableHotels';
import CurrentHotel from './components/CurrentHotel';
import HomesHotels from './components/Homes';
import Footer from './components/Footer';

function App() {
  const [hotels, setHotels] = useState([]);
  const [availableHotels, setAvailable] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((resonce) => resonce.json())
      .then((json) => {
        setHotels(json);
      });
  }, []);

  return (
    <>
      <Top setAvailable={setAvailable} />
      {availableHotels?.length >= 1 && (
        <AvailableHotels availableHotels={availableHotels} />
      )}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HomesHotels hotels={hotels} />
            </>
          }
        />
        <Route path='/hotels/:hotelId' element={<CurrentHotel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
