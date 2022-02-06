import React from 'react';
import PropTypes from 'prop-types';

import HotelBlocks from '../HotelBlocks';

const HomesHotels = ({ hotels }) => (
  <section className='homes'>
    <h1 className='homes__h1'>Homes guests loves</h1>
    <HotelBlocks hotels={hotels} />
  </section>
);

export default HomesHotels;

HomesHotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
};
