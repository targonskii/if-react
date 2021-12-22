import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ type, text, handleClick }) {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
