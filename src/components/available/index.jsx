import React from 'react';
import PropTypes from 'prop-types';

import HotelBlocks from '../HotelBlocks/Index';

function AvailableHotels({ hotels }) {
  return (
    <section className="homes">
      <h1 className="homes__h1">Available hotels</h1>
      <HotelBlocks data={hotels} />
    </section>
  );
}

export default AvailableHotels;

AvailableHotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
