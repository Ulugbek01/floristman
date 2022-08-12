import React from 'react'
import Container from '../Layout/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

import logo from '../../assets/images/logo.png';

import classes from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={classes['footer']}>
      <Container>
       <div className={classes['footer__top']}>
        <div>
            <img onClick={() => navigate('/')} className={classes['footer__logo']} src={logo} alt="logo" width={100}/>
          </div>

          <div>
            <a className={classes['tel']} href="tel:+998 99 999 99 99" title='+998 99 999 99 99'>+998 99 999 99 99</a>
          </div>
       </div>
       <p className={classes['footer__bottom']}>FloristMan © 2022</p>
      </Container>
    </div>
  )
}

export default Footer