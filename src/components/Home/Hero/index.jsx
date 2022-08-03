import React from 'react'
import Container from '../../Layout/Container';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <Container className={classes['hero']}>
      <div className={classes['hero__content']}>
        <h1 className={classes['hero__title']}>Fruit baskets</h1>
        <p className={classes['hero__description']}>You can choose any song from our catalog or order your own version</p>
      </div>
    </Container>
  )
}

export default Hero