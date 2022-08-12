import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Container from '../Layout/Container'

import noImage from '../../assets/images/no-img.jpg';
import classes from './Product.module.scss';


const Product = () => {
  const { id } = useParams();
  const { data } = useQuery(['item'],
    async () => {
      const res = await fetch(`http://localhost:4000/products?id=${id}`);
      return await res.json();
    })
    
  return (
    <Container className={classes['container']}>
      {/* {data[0]?.name} */}
      {/* <p>{data[0]?.category}</p> */}
      {/* <img src={data[0]?.images[0]} alt="product img" /> */}

      {/* <div style={{display:’flex’,flexWrap:’wrap’}}>
        <div style={{width:’100%’}}><img></div>
        <div style={{width:calc(100% / 3)}}><img></div>
        <div style={{width:calc(100% / 3)}}><img></div>
        <div style={{width:calc(100% / 3)}}><img></div>
      </div> */}
    </Container>
  )
}

export default Product