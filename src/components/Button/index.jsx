import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text, handleClick }) {
  return (
    <button type='button' onClick={handleClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
