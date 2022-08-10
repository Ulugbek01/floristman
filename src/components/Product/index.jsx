import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Container from '../Layout/Container'

import noImage from '../../assets/images/no-img.jpg';
import classes from './Product.module.scss';


const Product = () => {
  const { id } = useParams();
  const { data } = useQuery(['item'], () => { return fetch(`http://localhost:4000/products?id=${id}`).then((res) => res.json())})
  
  console.log(data);

  return (
    <Container className={classes['container']}>
      {/* {data[0]?.name} */}
      {/* <p>{data[0]?.category}</p> */}
      {/* <img src={data[0]?.images[0]} alt="product img" /> */}
    </Container>
  )
}

export default Product