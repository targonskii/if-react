import React from 'react';
import { topSectionStyle } from '../TopSection/style';

const Dropdown = ({ handleClick, text, img }) => {
  const classes = topSectionStyle();
  return (
    <div className={classes.header__signout} onClick={handleClick}>
      <img src={img} alt='signout' />
      <p>{text}</p>
    </div>
  );
};

export default Dropdown;
