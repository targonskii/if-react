import React from 'react';
import PropTypes from 'prop-types';
import HotelCard from '../HotelCards';

export default function HotelBlocks(props) {
  const { data } = props;
  const hotels = [...data].slice(0, 4);

  return (
    <div className="homes__slider">
      {hotels.map((item) => (
        <HotelCard
          name={item.name}
          city={item.city}
          country={item.country}
          imageUrl={item.imageUrl}
          key={item.id}
        />
      ))}
    </div>
  );
}

HotelBlocks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
