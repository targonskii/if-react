import React, { useState, useEffect } from 'react';

import '../../App.css';

import Top from '../../components/TopSection';
import AvailableHotels from '../../components/AvailableHotels';
import HomesHotels from '../../components/Homes';
import Footer from '../../components/Footer';

const MainPage = () => {
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
      <HomesHotels hotels={hotels} />
      <Footer />
    </>
  );
};

export default MainPage;
