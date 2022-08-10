import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import  categories from '../../utils/categories';
import Container from '../Layout/Container';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const {pathname} = useLocation();

  return (
    <Container>
      <nav className={classes['navbar']}>
        {categories.map((category) => {
          return (
            <NavLink className={classNames(classes['navbar__link'], classes[`navbar__active-${category.path === pathname}`])} key={category.id} to={category.path}>{category.title}</NavLink>
          )
        }
        )}
      </nav>
    </Container>
  )
}

export default Navbar