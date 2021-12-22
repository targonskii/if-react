import React from 'react';

const Dropdown = ({ handleClick, text, img }) => {
  return (
    <div className='header__signout' onClick={handleClick}>
      <img src={img} alt='signout' />
      <p>{text}</p>
    </div>
  );
};

export default Dropdown;
