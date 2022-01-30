import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { apiHotelsUrl } from '../../redux/constants/urls';

const CurrentHotel = () => {
  const { hotelId } = useParams();
  const history = useNavigate();

  const [currentHotel, setCurrentHotel] = useState({});

  useEffect(() => {
    const url = new URL(`${apiHotelsUrl}/hotelId`);
    const urlHotel = new URL(hotelId, url);

    fetch(`${urlHotel}`)
      .then((response) => response.json())
      .then((json) => {
        setCurrentHotel(json);
      });
  }, [hotelId]);

  return (
    <div className='homes__slider'>
      <Link to='/'>
        <Button
          type='button'
          className='available_hotel'
          text='Go Back'
          onClick={() => history.push('/')}
        />
      </Link>
      <a>
        <img src={currentHotel.imageUrl} alt='hotel_picture' />
        <p>{currentHotel.name}</p>
        <p>
          {currentHotel.city}
          ,
          <br />
          {currentHotel.country}
        </p>
      </a>
    </div>
  );
};

export default CurrentHotel;
