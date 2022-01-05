import { actionTypes } from '../constants/actionTypes';

export const signIn = ({ isLoggedIn = false }) => ({
  type: actionTypes.signIn,
  isLoggedIn,
});

export const signOut = ({ isLoggedIn = true }) => ({
  type: actionTypes.signOut,
  isLoggedIn,
});

export const login = ({ email = '', password = '' }) => ({
  type: actionTypes.addUser,
  email,
  password,
});
