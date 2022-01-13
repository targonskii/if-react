import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './App.css';

import Routes from './components/Routes';

const App = ({ login }) => {
  let navigate = useNavigate();

  useEffect(() => {
    login ? navigate('/') : navigate('/login');
  }, [login]);

  return <Routes />;
};

const mapStateToProps = (state) => {
  return {
    login: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
