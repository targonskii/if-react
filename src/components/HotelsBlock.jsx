import React from 'react';
import PropTypes from 'prop-types';
import HotelCard from './HotelCard';

export default function HotelBlocks(props) {
  const { data } = props;
  return (
    <div className="homes__slider">
      {data.slice(0, 4).forEach((item) => (
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
