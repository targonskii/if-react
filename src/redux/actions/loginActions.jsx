import { createActions } from 'redux-actions';

export const { signIn, signOut, login } = createActions(
  'SIGNIN',
  'SIGNOUT',
  'ADD_USER'
);
