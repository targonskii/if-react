import { handleActions } from 'redux-actions';

import {
  setDestination,
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
} from '../actions/queryActions';

import { initialQueryState } from '../constants/initialState';

export const queryReducer = handleActions(
  {
    [setDestination]: (state, { payload }) => {
      return {
        ...state,
        search: payload,
      };
    },
    [setCheckIn]: (state, { payload }) => {
      return {
        ...state,
        dateFrom: payload,
      };
    },
    [setCheckOut]: (state, { payload }) => {
      return {
        ...state,
        dateTo: payload,
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
  },
  initialQueryState
);
