import React from 'react';
import PropTypes from 'prop-types';
import HotelCard from '../HotelCard/index';
import { homesStyle } from '../Homes/style';

export default function HotelBlocks({ hotels }) {
  const classes = homesStyle();

  return (
    <div className={classes.homes__slider}>
      {hotels.slice(0, 4).map((item) => (
        <HotelCard item={item} key={item.id} />
      ))}
    </div>
  );
}

HotelBlocks.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
