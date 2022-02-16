import React from 'react';
import PropTypes from 'prop-types';

import HotelBlocks from '../HotelBlocks';
import { homesStyle } from '../Homes/style';

function AvailableHotels({ availableHotels }) {
  const classes = homesStyle();

  return (
    <section className={classes.homes}>
      <h1 className={classes.homes__h1}>Available hotels</h1>
      <HotelBlocks hotels={availableHotels} />
    </section>
  );
}

export default AvailableHotels;

AvailableHotels.propTypes = {
  availableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
