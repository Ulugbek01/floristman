import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Container from '../Layout/Container';
import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
      <header className={classes['header']}>
        <Container className={classes['header__container']}>
          <img src={logo} alt="logo" className={classes['header__logo']} />
          <div className={classes['header__icons-wrapper']}>
            <FontAwesomeIcon icon={faBagShopping} className={classes['header__bag']}/>
            <FontAwesomeIcon icon={faHeart} className={classes['header__heart']} />
          </div>
        </Container>
      </header>
  )
}

export default Header;