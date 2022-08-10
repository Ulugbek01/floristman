import classNames from 'classnames';
import React, { useState } from 'react'
import classes from './Card.module.scss';

const Card = ({item, onClick}) => {
  
  const [selected, setSelected] = useState(false);

  const onSelect = ()=> {
    setSelected(!selected)
  }
  // console.log(selected);

  return (
      <div className={classes['card']}>
        <div className={classes['card__img']} onClick={onClick}>
          <img src={item?.images[0]} alt="card-img" width={278} height={303} />
        </div>
          <p className={classes['card__title']}>{item?.name}</p>
        <div className={classes['card__price-wrapper']}>
          <p className={classes['card__discount-price']}>{item?.price} USD</p>
          <p className={classes['card__original-price']}>{item?.discount} USD</p>
        </div>
        <button className={classNames(classes['card__btn'], classes[`card__btn-${selected}`])} onClick={onSelect}>Add To Cart</button>
    </div>
  )
}

export default Card