import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { publicContext, PrivateContext } from './context';
import './App.css';

import Routes from './components/Routes';
import LoginPage from './pages/LoginPage';

const App = () => {
  // const [contextState, setContextState] = useState({ ...publicContext });

  // const signIn = (user) => {
  //   setContextState({
  //     user,
  //     isLoggedIn: true,
  //   });
  // };

  // const signOut = () => {
  //   setContextState({ ...publicContext });
  // };

  return (
    // <Routes />
    <Provider store={store}>
      <>{store.isLoggedIn ? <Routes /> : <LoginPage />}</>
    </Provider>
  );
};

export default App;
