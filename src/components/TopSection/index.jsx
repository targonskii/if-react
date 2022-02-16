import React, { useState, useCallback, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo_triphouse_blue.svg';
import SignOut from '../../images/sign_out.svg';
import GooglePlay from '../../images/google-play.svg';
import AppleStore from '../../images/app_store.svg';

import Filter from '../Filter';
import Button from '../Button';
import Dropdown from '../Dropdown';

import 'react-datepicker/dist/react-datepicker.css';
import { topSectionStyle } from './style';

import {
  signOut,
  setDestination,
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
  getAvailableHotels,
} from '../../redux/actions';
import { useSelector } from 'react-redux';

function Top() {
  const classes = topSectionStyle();

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const query = useSelector((state) => state.query);

  const [filterData, setFilterData] = useState({
    adults: query.adults,
    children: query.children.length || 0,
    rooms: query.rooms,
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
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setDestination(e.target.value));
  };

  useEffect(() => {
    dispatch(setCheckIn(Date.parse(startDate)));
    dispatch(setCheckOut(Date.parse(endDate)));
  }, [dispatch, startDate, endDate]);

  useEffect(() => {
    dispatch(setAdults(filterData.adults));
    dispatch(setChildren(filterData.children));
    dispatch(setRooms(filterData.rooms));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getAvailableHotels());
  };

  const filterClick = () => {
    setVisibleFilter((visibleFilter) => !visibleFilter);
  };

  const [showAuth, setShowAuth] = useState(false);

  const signOutClick = useCallback((e) => {
    e.preventDefault();
    dispatch(signOut(false));
    setShowAuth((showAuth) => !showAuth);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.header__main}>
        <div className={classes.header__menu}>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <ul>
            <li className={classes.header__stays}>
              <a href='#stays'>Stays</a>
            </li>
            <li className={classes.header__attractions}>
              <a href='#attractions'>Attractions</a>
            </li>
            <li>
              <div className={classes.header__night} />
            </li>
            <li>
              <div
                className={classes.header__account}
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
        <div className={classes.header__search}>
          <p className={classes.header__title}>
            Discover stays
            <br />
            to live, work or just relax
          </p>
          <form action=''>
            <div className={classes.header__destination}>
              <label htmlFor='search'>
                <p>Your destination or hotel name</p>
                <input
                  id='search'
                  onChange={handleInput}
                  placeholder='New York'
                />
              </label>
            </div>
            <div className={classes.header__date}>
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
            <div className={classes.header__people}>
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
              className={classes.header__button}
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
        <div className={classes.header__download}>
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

export default Top;
