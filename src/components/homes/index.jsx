import React from 'react';

// constants
import data from '../../constants/data';

// components
import HotelBlocks from '../HotelBlocks/Index';

// styles

const HomesHotels = () => (
  <section className="homes">
    <h1 className="homes__h1">Homes guests loves</h1>
    <HotelBlocks data={data} />
  </section>
);

export default HomesHotels;
