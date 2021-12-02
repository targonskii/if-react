import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HotelCard({ name, city, country, imageUrl, key }) {
  return (
    <div>
      <Link to={`/hotels/${key}`}>
        <img src={imageUrl} alt='hotel_picture' />
      </Link>
      <Link to={`/hotels/${key}`}>
        <p>{name}</p>
      </Link>
      <Link to={`/hotels/${key}`}>
        <p>
          {city}
          ,
          <br />
          {country}
        </p>
      </Link>
    </div>
  );
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
