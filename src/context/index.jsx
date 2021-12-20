import { createContext } from 'react';

const publicContext = {
  user: {},
  isLoggedIn: false,
};

const PrivateContext = createContext({
  ...publicContext,
  signIn: () => {},
  signOut: () => {},
});

export { publicContext, PrivateContext };
