import React, { useState } from 'react';
import { publicContext, PrivateContext } from './context';

import './App.css';

import Routes from './components/Routes';
import LoginPage from './pages/LoginPage';

function App() {
  const [contextState, setContextState] = useState({ ...publicContext });

  const signIn = (user) => {
    setContextState({
      user,
      isLoggedIn: true,
    });
  };

  const signOut = () => {
    setContextState({ ...publicContext });
  };

  return (
    <PrivateContext.Provider value={{ contextState, signIn, signOut }}>
      <>{contextState.isLoggedIn ? <Routes /> : <LoginPage />}</>
    </PrivateContext.Provider>
  );
}

export default App;
