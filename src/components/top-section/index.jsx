import React, { useState } from 'react';
import Logo from '../../images/logo_triphouse_blue.svg';
import GooglePlay from '../../images/google-play.svg';
import AppleStore from '../../images/app_store.svg';
import Button from '../Button';
import AvailableHotels from '../Available';

function Top() {
  const [text, setText] = useState('');

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
              <p>
                <label htmlFor="search">Your destination or hotel name</label>
              </p>
              <input
                id="search"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="New York"
              />
            </div>
            <div className="header__date">
              <div className="header__in">
                <p>
                  <label htmlFor="inId">Check-in - </label>
                </p>
                <input type="date" id="inId" />
              </div>
              <div className="header__out">
                <p>
                  <label htmlFor="outId">Check-out</label>
                </p>
                <input type="date" id="outId" />
              </div>
            </div>
            <div className="header__people">
              <input type="number" placeholder="2 Adults — 0 Children — 1 Room" />
            </div>
            <Button onClick={AvailableHotels} />
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
