import React from 'react';
import PropTypes from 'prop-types';

import HotelBlocks from '../HotelBlocks';

function AvailableHotels({ availableHotels }) {
  return (
    <section className="homes">
      <h1 className="homes__h1">Available hotels</h1>
      <HotelBlocks hotels={availableHotels} />
    </section>
  );
}

export default AvailableHotels;

AvailableHotels.propTypes = {
  availableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
