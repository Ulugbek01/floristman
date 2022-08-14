import React, { useState } from 'react'
import Container from '../../Layout/Container';
import classes from'./OrderBasket.module.scss';
import basket from '../../../assets/images/basket.png';

const OrderBasket = () => {
  const [info, setInfo] = useState({
    name: '',
    tel: '',
    text: ''
  });

  const handleChange = (e) => {
    setInfo({...info, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      name: '',
      tel: '',
      text: '',
    })
  }

  return (
    <Container className={classes['order__basket-container']}>
      <h2 className={classes['title']}>Order A Unique Basket!</h2>
      <div className={classes['order__basket']}>
        <div className={classes['order__basket-info']}>
          <form action="#">
            <input onChange={handleChange} value={info.name} className={classes['input']} name="name" type="text" placeholder='Name*' />
            <input onChange={handleChange} value={info.tel} className={classes['input']} name="tel" type={"tel"} placeholder='Phone Number*'/>
            <textarea onChange={handleChange} value={info.text} className={classes['textarea']} name="text" id="text" cols="30" rows="10" placeholder='Your Ideas*'>

            </textarea>
            <button onClick={handleSubmit} type="submit" className={classes['send-btn']}>Send</button>
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