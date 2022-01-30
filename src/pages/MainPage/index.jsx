import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../../App.css';

import Top from '../../components/TopSection';
import AvailableHotels from '../../components/AvailableHotels';
import HomesHotels from '../../components/Homes';
import Footer from '../../components/Footer';

// import { apiPopularHotelsUrl } from '../../redux/constants/urls';

const MainPage = () => {
  const availableHotels = useSelector(({ hotels }) => hotels.availableHotels);
  const popHotels = useSelector(({ hotels }) => hotels.popularHotels);

  // const [hotels, setHotels] = useState([]);
  // const [availableHotels, setAvailable] = useState([]);

  // useEffect(() => {
  //   let cleanupFunction = false;
  //   fetch(apiPopularHotelsUrl)
  //     .then((resonce) => resonce.json())
  //     .then((json) => {
  //       if (!cleanupFunction) setHotels(json);
  //     });
  //   return () => (cleanupFunction = true);
  // }, []);

  return (
    <>
      <Top />
      {availableHotels?.length >= 1 && (
        <AvailableHotels availableHotels={availableHotels} />
      )}
      <HomesHotels hotels={popHotels} />
      <Footer />
    </>
  );
};

export default MainPage;
