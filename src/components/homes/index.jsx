import React from 'react';
import data from '../data';
import HotelBlocks from '../hotelBlocks';

function HomesHotels() {
  return (
    <section className="homes">
      <h1 className="homes__h1">Homes guests loves</h1>
      <HotelBlocks data={data} />
    </section>
  );
}

export default HomesHotels;
