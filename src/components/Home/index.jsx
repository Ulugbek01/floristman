import React from 'react'
import Container from '../Layout/Container';
import Badge from './Badge';
import Hero from './Hero';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Container>
        <Hero/>
        <Badge/>
    </Container>
  )
}

export default Home;