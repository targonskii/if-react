import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import Routes from './components/Routes';

import { darkTheme, lightTheme } from './themes';

const App = () => {
  let navigate = useNavigate();
  const login = useSelector(({ login }) => login.isLoggedIn);
  const theme = useSelector(({ theme }) => theme.theme);

  useEffect(() => {
    login ? navigate('/') : navigate('/login');
  }, [login]);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
