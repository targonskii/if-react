import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import CurrentHotel from '../CurrentHotel';
import LoginPage from '../../pages/LoginPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/hotels/:hotelId' element={<CurrentHotel />}></Route>
    </ReactRoutes>
  );
};

export default Routes;
