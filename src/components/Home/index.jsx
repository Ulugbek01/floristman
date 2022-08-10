import React from 'react'
import Badge from './Badge';
import Category from './Category';
import Hero from './Hero';
import SpecialDiscount from './SpecialDiscount';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Badge/>
        <SpecialDiscount/>
    </div>
  )
}

export default Home;