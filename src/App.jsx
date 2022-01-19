import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './App.css';

import Routes from './components/Routes';

const App = () => {
  let navigate = useNavigate();
  const login = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    login ? navigate('/') : navigate('/login');
  }, [login]);

  return <Routes />;
};

// const mapStateToProps = (state) => {
//   return {
//     login: state.isLoggedIn,
//   };
// };

// export default connect(mapStateToProps)(App);
export default App;
