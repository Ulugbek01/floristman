import React from 'react'
import Container from '../../Layout/Container';
import classes from'./OrderBasket.module.scss';
import basket from '../../../assets/images/basket.png';

const OrderBasket = () => {
  return (
    <Container className={classes['order__basket-container']}>
      <h2 className={classes['title']}>Order A Unique Basket!</h2>
      <div className={classes['order__basket']}>
        <div className={classes['order__basket-info']}>
          <form action="#">
            <input className={classes['input']} type="text" placeholder='Name*' />
            <input className={classes['input']} type={"tel"} placeholder='Phone Number*'/>
            <textarea className={classes['textarea']} name="massage" id="massage" cols="30" rows="10">

            </textarea>
            <button type="submit" className={classes['send-btn']}>Send</button>
          </form>
        </div>

        <div className={classes['order-basket-image']}>
          <img className={classes['img']} src={basket} alt="basket" />
        </div>
      </div>
    </Container>
  )
}

export default OrderBasket