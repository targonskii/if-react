import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import Logo from '../../images/logo_triphouse_blue.svg';
import GooglePlay from '../../images/google-play.svg';
import AppleStore from '../../images/app_store.svg';

import Filter from '../Filter';
import Button from '../Button';

import 'react-datepicker/dist/react-datepicker.css';

function Top({ setAvailable }) {
  const [text, setText] = useState('');
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [filterData, setFilterData] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  })
  const [visibleFilter, setVisibleFilter] = useState(false)

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
    url.searchParams.set('search', `${text}`);
    fetch(`${url}`)
      .then((resonce) => resonce.json())
      .then((json) => {
        setAvailable(json);
      });
  };

  const filterInput = (e) => {
    setFilterData(e.target.value)
  };

  const filterClick = () => {
    setVisibleFilter((visibleFilter) => !visibleFilter)
  }

  return (
    <header className="header">
      <div className="header__main">
        <div className="header__menu">
          <a href="#menu">
            <img src={Logo} alt="logo" />
          </a>
          <ul>
            <li className="header__stays"><a href="#stays">Stays</a></li>
            <li className="header__attractions"><a href="#attractions">Attractions</a></li>
            <li><div className="header__night" /></li>
            <li><a href="#account" aria-label="account"><div className="header__account" /></a></li>
          </ul>
        </div>
        <div className="header__search">
          <p className="header__title">
            Discover stays
            <br />
            to live, work or just relax
          </p>
          <form action="">
            <div className="header__destination">
              <label htmlFor="search">
                <p>Your destination or hotel name</p>
                <input
                  id="search"
                  value={text}
                  onChange={handleInput}
                  placeholder="New York"
                />
              </label>
            </div>
            <div className="header__date">
              <p>Check-in - Check-out</p>
              <DatePicker
                selectsRange
                placeholderText="Check-in — Check-out"
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                monthsShown={2}
              />
            </div>
            <div className="header__people">
              <input 
                value={filterData}
                onClick={filterClick}
                onChange={filterInput}
                type="number" 
                placeholder={
                  `${filterData.adults}`+" Adults — "+
                  `${filterData.children}`+" Children — "+
                  `${filterData.rooms}`+" Room"
                } 
              />
            </div>
            <Button
              className="header__button"
              text="Search"
              handleClick={handleClick}
            />
          </form>
          {visibleFilter && <Filter filterData={filterData} setFilterData={setFilterData} />}
        </div>
        <div className="header__download">
          <a href="#google"><img src={GooglePlay} alt="google-play" /></a>
          <a href="#apple"><img src={AppleStore} alt="app_store" /></a>
        </div>
      </div>
    </header>
  );
}

export default Top;

Top.propTypes = {
  setAvailable: PropTypes.func.isRequired,
};
