import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import './App.css';

import Routes from './components/Routes';

const App = () => {
  let navigate = useNavigate();
  const login = useSelector(({ login }) => login.isLoggedIn);

  useEffect(() => {
    login ? navigate('/') : navigate('/login');
  }, [login]);

  return <Routes />;
};

export default App;
