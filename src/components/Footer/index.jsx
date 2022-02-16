import React from 'react';
import { footerStyle } from './style';

import WhiteLogo from '../../images/logo_triphouse_white.svg';
// import './style.css';

const Footer = () => {
  const classes = footerStyle();
  return (
    <>
      <section className={classes.footer__section}>
        <ul className={classes.footer__about}>
          <li className={classes.footer__header}>About</li>
          <li>How triphouse works</li>
          <li>Careers</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
        <ul className={classes.footer__property}>
          <li className={classes.footer__header}>Property types</li>
          <li>Guest houses</li>
          <li>Hotels</li>
          <li>Apartments</li>
          <li>Villas</li>
          <li>Holiday homes</li>
          <li>Hostels</li>
        </ul>
        <ul className={classes.footer__support}>
          <li className={classes.footer__header}>Support</li>
          <li>Contact Customer Service</li>
          <li>FAQ</li>
        </ul>
        <p className={classes.footer__copyright}>
          &copy; 2020 Triphouse, Inc. All rights reserved.
        </p>
      </section>
      <section className={classes.footer__mobile}>
        <img className={classes.footer__logo} src={WhiteLogo} alt='logo' />
        <div className={classes.footer__links}>
          <p className={classes.footer__links_about}>About</p>
          <p className={classes.footer__links_property}>Property types</p>
          <p className={classes.footer__links_support}>Support</p>
        </div>
        <p className={classes.footer__copyright_mobile}>
          &copy; 2020 Triphouse, Inc. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
