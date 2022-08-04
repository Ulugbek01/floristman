import React from 'react'
import { badge } from '../../../utils/badge';
import Container from '../../Layout/Container'
import classes from './Badge.module.scss';
import Card from './Card';

const Badge = () => {
   return (
    <Container className={classes['badge']}>
        {badge.map((item) => 
            <Card key={item.id} item={item}/>
        )}
    </Container>
  )
}

export default Badge