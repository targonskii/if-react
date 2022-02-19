import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setChildren } from '../../redux/actions';

import { topSectionStyle } from '../TopSection/style';

const Selector = ({ childAge }) => {
  const classes = topSectionStyle();

  const dispatch = useDispatch();
  const [child, setChild] = useState([]);

  const handleChange = useCallback((e) => {
    e.preventDefault();
    setChild((child) => [...child, ...[e.target.value]]);
  }, []);

  useEffect(() => {
    dispatch(setChildren(child));
  }, [dispatch, child]);

  if (childAge.length > 0) {
    return (
      <div className={classes.header__people_age}>
        <label htmlFor='age'>
          What is the age of the child you’re travelling with?
          {childAge.map((i) => {
            return (
              <select key={i.id} onChange={handleChange}>
                <option value='0'>0 years old</option>
                <option value='1'>1 years old</option>
                <option value='2'>2 years old</option>
                <option value='3'>3 years old</option>
                <option value='4'>4 years old</option>
                <option value='5'>5 years old</option>
                <option value='6'>6 years old</option>
                <option value='7'>7 years old</option>
                <option value='8'>8 years old</option>
                <option value='9'>9 years old</option>
                <option value='10'>10 years old</option>
                <option value='11'>11 years old</option>
                <option value='12'>12 years old</option>
                <option value='13'>13 years old</option>
                <option value='14'>14 years old</option>
                <option value='15'>15 years old</option>
                <option value='16'>16 years old</option>
                <option value='17'>17 years old</option>
              </select>
            );
          })}
        </label>
      </div>
    );
  }
  return null;
};

export default Selector;

Selector.propTypes = {
  childAge: PropTypes.arrayOf(PropTypes.object).isRequired,
};
