import { handleActions } from 'redux-actions';

import {
  setDestination,
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
  setChildrenAge,
} from '../actions/queryActions';

import { initialQueryState } from '../constants/initialState';

export const queryReducer = handleActions(
  {
    [setDestination]: (state, { payload }) => {
      return {
        ...state,
        destination: payload,
      };
    },
    [setCheckIn]: (state, { payload }) => {
      return {
        ...state,
        checkIn: payload,
      };
    },
    [setCheckOut]: (state, { payload }) => {
      return {
        ...state,
        checkOut: payload,
      };
    },
    [setAdults]: (state, { payload }) => {
      return {
        ...state,
        adults: payload,
      };
    },
    [setChildren]: (state, { payload }) => {
      return {
        ...state,
        children: payload,
      };
    },
    [setRooms]: (state, { payload }) => {
      return {
        ...state,
        rooms: payload,
      };
    },
    [setChildrenAge]: (state, { payload }) => {
      return {
        ...state,
        childrenAge: payload,
      };
    },
  },
  initialQueryState
);
