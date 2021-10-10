import React, { useState } from 'react';

function Top() {
  const [text, setText] = useState('');
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__menu">
          <a href="#menu">
            <img src="./images/logo_triphouse_blue.svg" alt="logo" />
          </a>
          <ul>
            <li className="header__stays"><a href="#stays">Stays</a></li>
            <li className="header__attractions"><a href="#attractions">Attractions</a></li>
            <li><div className="header__night" /></li>
            <li><a href="#"><div className="header__account" /></a></li>
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
                <label for="search">Your destination or hotel name</label>
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
                  <label htmlFor="in">Check-in - </label>
                </p>
                <input type="date" id="date" />
              </div>
              <div className="header__out">
                <p>
                  <label htmlFor="in">Check-out</label>
                </p>
                <input type="date" id="date" />
              </div>
            </div>
            <div className="header__people">
              <input type="number" placeholder="2 Adults — 0 Children — 1 Room" />
            </div>
            <button>Search</button>
          </form>
        </div>
        <div className="header__download">
          <a href="#"><img src="./images/google-play.svg" alt="google-play" /></a>
          <a href="#"><img src="./images/app_store.svg" alt="app_store" /></a>
        </div>
      </div>
    </header>
  );
}

export default Top;
