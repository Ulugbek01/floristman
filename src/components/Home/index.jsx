import React from 'react'
import Badge from './Badge';
import Category from './Category';
import Hero from './Hero';
import SpecialDiscount from './SpecialDiscount';
import OrderBasket from './OrderBasket';
import HowToOrder from './HowToOrder';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Badge/>
        <SpecialDiscount/>
        <OrderBasket/>
        <HowToOrder/>
    </div>
  )
}

export default Home;