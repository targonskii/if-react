import { handleActions } from 'redux-actions';

import { signIn, signOut, login } from '../actions/loginActions';

import { initialLoginState } from '../constants/initialState';

export const loginReducer = handleActions(
  {
    [signIn]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload,
      };
    },
    [signOut]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload,
      };
    },
    [login]: (state, { payload }) => {
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      };
    },
  },
  initialLoginState
);
