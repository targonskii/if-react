import React from 'react';
import PropTypes from 'prop-types';

export default function HotelCard({
  name, city, country, imageUrl,
}) {
  <div>
    <a href="#section">
      <img src={imageUrl} alt="hotel_picture" />
      <p>{name}</p>
      <p>
        {city}
        {country}
      </p>
    </a>
  </div>;
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
