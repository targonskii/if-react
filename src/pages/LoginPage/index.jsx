import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Logo from '../../../public/images/logo_triphouse_blue.svg';

import Button from '../../components/Button';

import { loginPageStyle } from './style';

import { signIn, login } from '../../redux/actions/loginActions';

const LoginPage = () => {
  const classes = loginPageStyle();

  const [loginState, setLoginState] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (key) => (e) => {
      e.preventDefault();
      setLoginState((prevState) => ({
        ...prevState,
        [key]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginState.email && loginState.password) {
      dispatch(login(loginState));
      dispatch(signIn(true));
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__main}>
        <div className={classes.header__menu}>
          <Link to='/login'>
            <img src={Logo} alt='logo' />
          </Link>
          <ul>
            <li className={classes.header__stays}>
              <a href='#stays'>Stays</a>
            </li>
            <li className={classes.header__attractions}>
              <a href='#attractions'>Attractions</a>
            </li>
            <li>
              <div className={classes.header__night}></div>
            </li>
            <li>
              <div className={classes.header__account} />
            </li>
          </ul>
        </div>
        <div className={classes.header__login}>
          <form onSubmit={handleSubmit} action=''>
            <p>Sign In</p>
            <div className={classes.header__login_email}>
              <p>
                <label htmlFor='email'>Email address</label>
              </p>
              <input
                type='email'
                value={loginState.email}
                onChange={handleChange('email')}
              />
            </div>
            <div className={classes.header__login_password}>
              <p>
                <label htmlFor='password'>Password</label>
              </p>
              <input
                type='password'
                value={loginState.password}
                onChange={handleChange('password')}
              />
            </div>
            <Button type='submit' text='Sign In' />
          </form>
        </div>
      </div>
    </header>
  );
};

export default LoginPage;
