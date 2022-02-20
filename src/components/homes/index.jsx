import React from 'react';
import PropTypes from 'prop-types';

import HotelBlocks from '../HotelBlocks';

import { homesStyle } from './style';

const HomesHotels = ({ hotels }) => {
  const classes = homesStyle();

  return (
    <section className={classes.homes}>
      <h1 className={classes.homes__h1}>Homes guests loves</h1>
      <HotelBlocks hotels={hotels} />
    </section>
  );
};

export default HomesHotels;

HomesHotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
