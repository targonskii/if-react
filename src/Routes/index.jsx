import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import CurrentHotel from '../CurrentHotel';
import LoginPage from '../../pages/LoginPage';

const Routes = ({ hotels }) => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage hotels={hotels} />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/hotels/:hotelId' element={<CurrentHotel />} />
    </ReactRoutes>
  );
};

export default Routes;
