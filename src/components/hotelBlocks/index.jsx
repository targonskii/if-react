import React from 'react';
import PropTypes from 'prop-types';
import HotelCard from '../HotelCard/index';

export default function HotelBlocks({ hotels }) {
  return (
    <div className='homes__slider'>
      {hotels.slice(0, 4).map((item) => (
        <HotelCard item={item} key={item.id} />
      ))}
    </div>
  );
}

HotelBlocks.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
