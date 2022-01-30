import { createActions } from 'redux-actions';

export const {
  setDestination,
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
  setChildrenAge,
} = createActions(
  'SET_DESTINATION',
  'SET_CHECK_IN',
  'SET_CHECK_OUT',
  'SET_ADULTS',
  'SET_CHILDREN',
  'SET_ROOMS',
  'SET_CHILDREN_AGE'
);
