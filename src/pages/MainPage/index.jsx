import React, { useState, useEffect } from 'react';
import { publicContext, PrivateContext } from '../../context';

import '../../App.css';

import Top from '../../components/TopSection';
import AvailableHotels from '../../components/AvailableHotels';
import HomesHotels from '../../components/Homes';
import Footer from '../../components/Footer';
import LoginPage from '../LoginPage';

const MainPage = () => {
  const [hotels, setHotels] = useState([]);
  const [availableHotels, setAvailable] = useState([]);
  const [contextState, setContextState] = useState({ ...publicContext });

  const signIn = (user) => {
    setContextState({
      user,
      isLoggedIn: true,
    });
  };

  const signOut = () => {
    setContextState(publicContext);
  };

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((resonce) => resonce.json())
      .then((json) => {
        setHotels(json);
      });
  }, []);

  return (
    <PrivateContext.Provider value={{ contextState, signIn, signOut }}>
      <>
        {contextState.isLoggedIn ? (
          <>
            <Top setAvailable={setAvailable} />
            {availableHotels?.length >= 1 && (
              <AvailableHotels availableHotels={availableHotels} />
            )}
            <HomesHotels hotels={hotels} />
            <Footer />
          </>
        ) : (
          <LoginPage />
        )}
      </>
    </PrivateContext.Provider>
  );
};

export default MainPage;
