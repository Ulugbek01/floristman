import React from 'react'
import Container from '../../Layout/Container';
import classes from './HowToOrder.module.scss';
import details from '../../../assets/images/details.png'
import photo from '../../../assets/images/photo.png'
import payment from '../../../assets/images/payment.png'
import delivery from '../../../assets/images/delivery.png'

const HowToOrder = () => {
  return (
    <Container>
      <h2 className={classes['title']}>How To Order?</h2>
      <div className={classes['cards__wrapper']}>
        <div>
          <img src={details} alt="img" />
          <h3 className={classes['cards__wrapper-title']}>Leave a request on site</h3>
          <p className={classes['cards__wrapper-desc']}>Our staff will contact you to get details of order</p>
        </div>
        <div>
          <img src={photo} alt="img" />
          <h3 className={classes['cards__wrapper-title']}>Photo-Report</h3>
          <p className={classes['cards__wrapper-desc']}>Before delivering we would send you a photo-report of a ready product, in order to make sure you that your order is ready</p>
        </div>
        <div>
          <img src={payment} alt="img" />
          <h3 className={classes['cards__wrapper-title']}>Payment Method</h3>
          <p className={classes['cards__wrapper-desc']}>Cash or Credit card paymet after delivering</p>
        </div>
        <div>
          <img src={delivery} alt="img" />
          <h3 className={classes['cards__wrapper-title']}>Delivery</h3>
          <p className={classes['cards__wrapper-desc']}>We take respondibility to pack and deliver your order to any place and in any time!</p>
        </div>
      </div>
    </Container>
  )
}

export default HowToOrder