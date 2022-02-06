import { createActions } from 'redux-actions';

export const {
  setPopularHotels,
  getPopularHotels,
  setAvailableHotels,
  getAvailableHotels,
} = createActions(
  'SET_POPULAR_HOTELS',
  'GET_POPULAR_HOTELS',
  'SET_AVAILABLE_HOTELS',
  'GET_AVAILABLE_HOTELS'
);
