import React from 'react'
import { NavLink } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Container from '../Layout/Container';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Container>
      <nav className={classes['navbar']}>
        {navbar.map((item) => 
          <NavLink className={classes['navbar__link']} key={item.id} to={item.path}>{item.title}</NavLink>
          )}
      </nav>
    </Container>
  )
}

export default Navbar