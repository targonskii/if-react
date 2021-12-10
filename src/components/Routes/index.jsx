import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

// import Top from '../TopSection';
import HomesHotels from '../Homes';
import CurrentHotel from '../CurrentHotel';
// import Footer from '../Footer';

const Routes = ({ hotels, setAvailable }) => {
  return (
    <ReactRoutes>
      <Route
        path='/'
        element={
          <>
            <HomesHotels hotels={hotels} />
          </>
        }
      />
      <Route
        path='/hotels/:hotelId'
        element={
          <>
            <CurrentHotel />
          </>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
