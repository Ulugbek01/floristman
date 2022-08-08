import React from 'react'
import classes from './Card.module.scss';

const Card = ({item}) => {
  return (
      <div className={classes['card']}>
        <div className={classes['card__img']}>
          <img src={item?.images[0]} alt="card-img" width={278} height={303} />
        </div>
          <p className={classes['card__title']}>{item?.name}</p>
        <div className={classes['card__price-wrapper']}>
          <p className={classes['card__discount-price']}>{item?.price} USD</p>
          <p className={classes['card__original-price']}>{item?.discount} USD</p>
        </div>
        <button className={classes['card__btn']}>Add To Cart</button>
    </div>
  )
}

export default Card