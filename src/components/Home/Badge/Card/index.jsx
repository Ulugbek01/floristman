import React from 'react'
import classes from './Card.module.scss';

const Card = ({url, title}) => {
  return (
    <div className={classes['wrapper']}>
        <img src={url} alt="card-img" />
        <p>{title}</p>
    </div>
  )
}

export default Card