import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo_triphouse_blue.svg';
import SignOut from '../../images/sign_out.svg';
import GooglePlay from '../../images/google-play.svg';
import AppleStore from '../../images/app_store.svg';

import Filter from '../Filter';
import Button from '../Button';
import Dropdown from '../Dropdown';

import 'react-datepicker/dist/react-datepicker.css';

import { signOut } from '../../redux/actions/loginActions';

function Top({ setAvailable, signOut }) {
  const [text, setText] = useState('');
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [filterData, setFilterData] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const [childAge, setChildAge] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [stateButtons, setStateButtons] = useState({
    minusAdults: false,
    plusAdults: false,
    minusChild: true,
    plusChild: false,
    minusRooms: true,
    plusRooms: false,
  });

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

  const filterClick = () => {
    setVisibleFilter((visibleFilter) => !visibleFilter);
  };

  const [showAuth, setShowAuth] = useState(false);

  const signOutClick = useCallback((e) => {
    e.preventDefault();
    signOut(false);
    setShowAuth((showAuth) => !showAuth);
  }, []);

  return (
    <header className='header'>
      <div className='header__main'>
        <div className='header__menu'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <ul>
            <li className='header__stays'>
              <a href='#stays'>Stays</a>
            </li>
            <li className='header__attractions'>
              <a href='#attractions'>Attractions</a>
            </li>
            <li>
              <div className='header__night' />
            </li>
            <li>
              <div
                className='header__account'
                onClick={() => {
                  setShowAuth((showAuth) => !showAuth);
                }}
              />
            </li>
          </ul>
          {showAuth && (
            <Dropdown
              handleClick={signOutClick}
              text={'Sign out'}
              img={SignOut}
            />
          )}
        </div>
        <div className='header__search'>
          <p className='header__title'>
            Discover stays
            <br />
            to live, work or just relax
          </p>
          <form action=''>
            <div className='header__destination'>
              <label htmlFor='search'>
                <p>Your destination or hotel name</p>
                <input
                  id='search'
                  value={text}
                  onChange={handleInput}
                  placeholder='New York'
                />
              </label>
            </div>
            <div className='header__date'>
              <p>Check-in - Check-out</p>
              <DatePicker
                selectsRange
                placeholderText='Check-in — Check-out'
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                monthsShown={2}
              />
            </div>
            <div className='header__people'>
              <input
                value={filterData}
                onClick={filterClick}
                onChange={() => {}}
                type='number'
                placeholder={
                  `${filterData.adults}` +
                  ' Adults — ' +
                  `${filterData.children}` +
                  ' Children — ' +
                  `${filterData.rooms}` +
                  ' Room'
                }
              />
            </div>
            <Button
              type='button'
              className='header__button'
              text='Search'
              handleClick={handleClick}
            />
          </form>
          {visibleFilter && (
            <Filter
              filterData={filterData}
              setFilterData={setFilterData}
              childAge={childAge}
              setChildAge={setChildAge}
              stateButtons={stateButtons}
              setStateButtons={setStateButtons}
            />
          )}
        </div>
        <div className='header__download'>
          <a href='#google'>
            <img src={GooglePlay} alt='google-play' />
          </a>
          <a href='#apple'>
            <img src={AppleStore} alt='app_store' />
          </a>
        </div>
      </div>
    </header>
  );
}

const mapDispatchToProps = { signOut };

export default connect(null, mapDispatchToProps)(Top);

Top.propTypes = {
  setAvailable: PropTypes.func.isRequired,
};
