import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HotelCard({ item }) {
  return (
    <div>
      <Link to={`/hotels/${item.id}`}>
        <img src={item.imageUrl} alt='hotel_picture' />
      </Link>
      <Link to={`/hotels/${item.id}`}>
        <p className='homes__slider_name'>{item.name}</p>
      </Link>
      <Link to={`/hotels/${item.id}`}>
        <p>
          {item.city}
          ,
          <br />
          {item.country}
        </p>
      </Link>
    </div>
  );
}

HotelCard.propTypes = {
  item: PropTypes.object,
};
