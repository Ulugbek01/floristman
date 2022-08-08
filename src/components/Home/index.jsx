import React from 'react'
import Container from '../Layout/Container';
import Badge from './Badge';
import Category from './Category';
import Hero from './Hero';
import SpecialDiscount from './SpecialDiscount';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Container>
        <Hero/>
        <Category/>
        <Badge/>
        <SpecialDiscount/>
    </Container>
  )
}

export default Home;