import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Selector from '../Selector';
import { topSectionStyle } from '../TopSection/style';

function Filter({
  filterData,
  setFilterData,
  childAge,
  setChildAge,
  stateButtons,
  setStateButtons,
}) {
  const classes = topSectionStyle();
  const filterDefault = {
    adults: {
      min: 1,
      max: 30,
    },
    children: {
      min: 0,
      max: 10,
    },
    rooms: {
      min: 1,
      max: 30,
    },
  };

  const [adults, setAdults] = useState(filterData.adults);
  const [children, setChildren] = useState(filterData.children);
  const [rooms, setRooms] = useState(filterData.rooms);

  const clickMinusAdults = () => {
    setAdults((adults) => adults - 1);
  };
  const clickPlusAdults = () => {
    setAdults((adults) => adults + 1);
  };
  const clickMinusChild = () => {
    setChildren((children) => children - 1);
    setChildAge(childAge.slice(0, -1));
  };
  const clickPlusChild = () => {
    setChildren((children) => children + 1);
    setChildAge([...childAge, { id: Date.now() }]);
  };
  const clickMinusRooms = () => {
    setRooms((rooms) => rooms - 1);
  };
  const clickPlusRooms = () => {
    setRooms((rooms) => rooms + 1);
  };

  useEffect(() => {
    if (adults == filterDefault.adults.min) {
      setStateButtons({ ...stateButtons, minusAdults: true });
    } else if (adults == filterDefault.adults.max) {
      setStateButtons({ ...stateButtons, plusAdults: true });
    } else if (
      adults > filterDefault.adults.min ||
      adults < filterDefault.adults.max
    ) {
      setStateButtons({
        ...stateButtons,
        minusAdults: false,
        plusAdults: false,
      });
    }

    setFilterData({ ...filterData, adults: adults });
  }, [adults]);

  useEffect(() => {
    if (children == filterDefault.children.min) {
      setStateButtons({ ...stateButtons, minusChild: true });
    } else if (children == filterDefault.children.max) {
      setStateButtons({ ...stateButtons, plusChild: true });
    } else if (
      children > filterDefault.children.min ||
      children < filterDefault.children.max
    ) {
      setStateButtons({ ...stateButtons, minusChild: false, plusChild: false });
    }

    setFilterData({ ...filterData, children: children });
  }, [children]);

  useEffect(() => {
    if (rooms == filterDefault.rooms.min) {
      setStateButtons({ ...stateButtons, minusRooms: true });
    } else if (rooms == filterDefault.rooms.max) {
      setStateButtons({ ...stateButtons, plusRooms: true });
    } else if (
      rooms > filterDefault.rooms.min ||
      rooms < filterDefault.rooms.max
    ) {
      setStateButtons({ ...stateButtons, minusRooms: false, plusRooms: false });
    }

    setFilterData({ ...filterData, rooms: rooms });
  }, [rooms]);

  return (
    <div className={classes.header__people_filter}>
      <div className={classes.header__people_adults}>
        <span>Adults</span>
        <div className={classes.header__people_count}>
          <button
            className={
              filterData.adults <= filterDefault.adults.min
                ? 'classes.header__people_disabled'
                : ''
            }
            disabled={stateButtons.minusAdults}
            onClick={clickMinusAdults}
            type='button'
            value='-'
          >
            -
          </button>
          <span className={classes.adults} name='adults'>
            {adults}
          </span>
          <button
            className={
              filterData.adults >= filterDefault.adults.max
                ? 'classes.header__people_disabled'
                : ''
            }
            disabled={stateButtons.plusAdults}
            onClick={clickPlusAdults}
            type='button'
            value='+'
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.header__people_children}>
        <span>Children</span>
        <div className={classes.header__people_count}>
          <button
            className={
              filterData.children <= filterDefault.children.min
                ? classes.header__people_disabled
                : ''
            }
            disabled={stateButtons.minusChild}
            onClick={clickMinusChild}
            type='button'
            value='-'
          >
            -
          </button>
          <span className={classes.children}>{children}</span>
          <button
            className={
              filterData.children >= filterDefault.children.max
                ? 'header__people_disabled'
                : ''
            }
            disabled={stateButtons.plusChild}
            onClick={clickPlusChild}
            type='button'
            value='+'
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.header__people_rooms}>
        <span>Rooms</span>
        <div className={classes.header__people_count}>
          <button
            className={
              filterData.rooms <= filterDefault.rooms.min
                ? 'header__people_disabled'
                : ''
            }
            disabled={stateButtons.minusRooms}
            onClick={clickMinusRooms}
            type='button'
            value='-'
          >
            -
          </button>
          <span className={classes.rooms} name='rooms'>
            {rooms}
          </span>
          <button
            className={
              filterData.rooms >= filterDefault.rooms.max
                ? 'header__people_disabled'
                : ''
            }
            disabled={stateButtons.plusRooms}
            onClick={clickPlusRooms}
            type='button'
            value='+'
          >
            +
          </button>
        </div>
      </div>
      {childAge?.length > 0 && <Selector childAge={childAge} />}
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  setFilterData: PropTypes.func.isRequired,
  filterData: PropTypes.object.isRequired,
};
