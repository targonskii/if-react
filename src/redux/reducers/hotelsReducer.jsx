import { handleActions } from 'redux-actions';

import { setPopularHotels, setAvailableHotels } from '../actions/hotelsActions';

import { initialHotelsState } from '../constants/initialState';

export const hotelsReducer = handleActions(
  {
    [setPopularHotels]: (state, { payload }) => {
      return {
        ...state,
        setPopularHotels: payload,
      };
    },
    [setAvailableHotels]: (state, { payload }) => {
      return {
        ...state,
        setAvailableHotels: payload,
      };
    },
  },
  initialHotelsState
);
