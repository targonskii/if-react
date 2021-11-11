import React from 'react';
import PropTypes from 'prop-types';
import HotelCard from '../HotelCards/index';

export default function HotelBlocks({ hotels }) {
  return (
    <div className="homes__slider">
      {hotels.slice(0, 4).map((item) => (
        <HotelCard
          name={item.name}
          city={item.city}
          country={item.country}
          imageUrl={item.imageUrl}
          key={item.id}
        />
      ))}
    </div>
  );
}

HotelBlocks.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
