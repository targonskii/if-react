import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import Top from '../TopSection';
import HomesHotels from '../Homes';
import CurrentHotel from '../CurrentHotel';
import Footer from '../Footer';

const Routes = () => {
  return (
    <>
      <Route
        path='/'
        element={
          <>
            <Top setAvailable={setAvailable} />
            <HomesHotels hotels={hotels} />
            <Footer />
          </>
        }
      />
      <Route
        path='/hotels/:hotelId'
        element={
          <>
            <Top setAvailable={setAvailable} />
            <CurrentHotel />
            <Footer />
          </>
        }
      />
    </>
  );
};

export default Routes;
