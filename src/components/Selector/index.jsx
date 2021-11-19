import React from "react";
import PropTypes from "prop-types";

const Selector = ({ childAge }) => {
  return (
    <div className="header__people_age">
      <label htmlFor="age">
        What is the age of the child you’re travelling with?
        {childAge.map((i) => {
          return (
            <select key={i.id}>
              <option value="0">0 years old</option>
              <option value="1">1 years old</option>
              <option value="2">2 years old</option>
              <option value="3">3 years old</option>
              <option value="4">4 years old</option>
              <option value="5">5 years old</option>
              <option value="6">6 years old</option>
              <option value="7">7 years old</option>
              <option value="8">8 years old</option>
              <option value="9">9 years old</option>
              <option value="10">10 years old</option>
              <option value="11">11 years old</option>
              <option value="12">12 years old</option>
              <option value="13">13 years old</option>
              <option value="14">14 years old</option>
              <option value="15">15 years old</option>
              <option value="16">16 years old</option>
              <option value="17">17 years old</option>
            </select>
          );
        })}
      </label>
    </div>
  );
};

export default Selector;

Selector.propTypes = {
  childAge: PropTypes.arrayOf(PropTypes.object).isRequired,
};
