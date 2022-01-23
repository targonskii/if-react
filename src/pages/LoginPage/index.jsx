import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Logo from '../../images/logo_triphouse_blue.svg';

import Button from '../../components/Button';

import './index.css';

import { signIn, login } from '../../redux/actions/loginActions';

const LoginPage = () => {
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(loginState));
      dispatch(signIn(true));
    },
    [dispatch]
  );

  return (
    <div className='wrapper'>
      <header>
        <div className='header__main'>
          <div className='header__menu'>
            <Link to='/login'>
              <img src={Logo} alt='logo' />
            </Link>
            <ul>
              <li className='header__stays'>
                <a href='#stays'>Stays</a>
              </li>
              <li className='header__attractions'>
                <a href='#attractions'>Attractions</a>
              </li>
              <li>
                <div className='header__night'></div>
              </li>
              <li>
                <div className='header__account' />
              </li>
            </ul>
          </div>
          <div className='header__login'>
            <form onSubmit={handleSubmit} action=''>
              <p>Sign In</p>
              <div className='header__login_email'>
                <p>
                  <label htmlFor='email'>Email address</label>
                </p>
                <input
                  type='email'
                  value={loginState.email}
                  onChange={handleChange('email')}
                />
              </div>
              <div className='header__login_password'>
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
    </div>
  );
};

export default LoginPage;
