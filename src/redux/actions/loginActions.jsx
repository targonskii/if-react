import { createActions } from 'redux-actions';

export const { signIn, signOut, login } = createActions(
  'SIGN_IN',
  'SIGN_OUT',
  'LOGIN'
);
