import React from 'react'
import Header from '../Header';
import Container from '../Layout/Container';
import Hero from './Hero';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Container>
        <Hero/>
    </Container>
  )
}

export default Home;