import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../Button';

const CurrentHotel = () => {
  const { hotelId } = useParams();
  const history = useNavigate();

  const [currentHotel, setCurrentHotel] = useState(null);

  useEffect(() => {
    const url = new URL(
      'https://fe-student-api.herokuapp.com/api/hotels/hotelId'
    );
    const urlHotel = new URL(hotelId, url);

    fetch(`${urlHotel}`)
      .then((response) => response.json())
      .then((json) => {
        setCurrentHotel(json);
      });
  }, [hotelId]);

  return (
    <div className='homes__slider'>
      <Link to='/hotels'>
        <Button
          className='header__button'
          text='Go Back'
          onClick={() => history.goBack()}
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
