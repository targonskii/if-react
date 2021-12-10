import React from 'react';

import WhiteLogo from '../../images/logo_triphouse_white.svg';
import './style.css';

const Footer = () => {
  return (
    <>
      <section className='footer__section'>
        <ul className='footer__about'>
          <li className='footer__header'>About</li>
          <li>How triphouse works</li>
          <li>Careers</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
        <ul className='footer__property'>
          <li className='footer__header'>Property types</li>
          <li>Guest houses</li>
          <li>Hotels</li>
          <li>Apartments</li>
          <li>Villas</li>
          <li>Holiday homes</li>
          <li>Hostels</li>
        </ul>
        <ul className='footer__support'>
          <li className='footer__header'>Support</li>
          <li>Contact Customer Service</li>
          <li>FAQ</li>
        </ul>
        <p className='footer__copyright'>
          &copy; 2020 Triphouse, Inc. All rights reserved.
        </p>
      </section>
      <section className='footer__mobile'>
        <img className='footer__logo' src={WhiteLogo} alt='logo' />
        <div className='footer__links'>
          <p className='footer__links_about'>About</p>
          <p className='footer__links_property'>Property types</p>
          <p className='footer__links_support'>Support</p>
        </div>
        <p className='footer__copyright_mobile'>
          &copy; 2020 Triphouse, Inc. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
