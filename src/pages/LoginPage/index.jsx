import React, { useState, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PrivateContext } from '../../context';

import Logo from '../../images/logo_triphouse_blue.svg';

import Button from '../../components/Button';

import './index.css';

const LoginPage = () => {
  const [loginState, setLoginState] = useState({ email: '', password: '' });
  const { signIn } = useContext(PrivateContext);

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

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    signIn(loginState);
  }, []);

  return (
    <div className='wrapper'>
      <header>
        <div className='header__main'>
          <div className='header__menu'>
            <Link to='/'>
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
            <form action=''>
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
              <Button text='Sign In' onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
