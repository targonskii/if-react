import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../images/logo_triphouse_blue.svg';
import GooglePlay from '../../images/google-play.svg';
import AppleStore from '../../images/app_store.svg';

import Button from '../Button';

function Top({ setAvailable }) {
  const [text, setText] = useState('');

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
                Your destination or hotel name
                <input
                  id="search"
                  value={text}
                  onChange={handleInput}
                  placeholder="New York"
                />
              </label>
            </div>
            <div className="header__date">
              <div className="header__in">
                <label htmlFor="inId">
                  Check-in -
                  <input type="date" id="inId" />
                </label>
              </div>
              <div className="header__out">
                <label htmlFor="outId">
                  Check-out
                  <input type="date" id="outId" />
                </label>
              </div>
            </div>
            <div className="header__people">
              <input type="number" placeholder="2 Adults — 0 Children — 1 Room" />
            </div>
            <Button text="Search" handleClick={handleClick} />
          </form>
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
  // availableHotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAvailable: PropTypes.func.isRequired,
};
