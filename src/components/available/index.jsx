import React, { useState } from 'react';
import data from '../data';
import HotelBlocks from '../hotelBlocks';

function AvailableHotels() {
  const [text, setText] = useState('');
  const filteredData = data.filter((item) => item.name.indexOf(text));

  return (
    <section className="homes">
      <h1 className="homes__h1">Alailable hotels</h1>
      <HotelBlocks data={filteredData} />
    </section>
  );
}

export default AvailableHotels;