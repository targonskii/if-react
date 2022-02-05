import { handleActions } from 'redux-actions';

import { setPopularHotels, setAvailableHotels } from '../actions/hotelsActions';

import { initialHotelsState } from '../constants/initialState';

export const hotelsReducer = handleActions(
  {
    [setPopularHotels]: (state, { payload }) => {
      return {
        ...state,
        popularHotels: payload,
      };
    },
    [setAvailableHotels]: (state, { payload }) => {
      return {
        ...state,
        availableHotels: payload,
      };
    },
  },
  initialHotelsState
);
