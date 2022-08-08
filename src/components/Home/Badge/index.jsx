import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Container from '../../Layout/Container'
import classes from './Badge.module.scss';
import Card from './Card';

const Badge = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useQuery([type], async () => {
    const res = await fetch(`http://localhost:4000/products?category=${type}`);
    return await res.json();},
    {
      onSuccess: (res) => {
        setData(res);
      }
    } 
  )


  console.log(data);

   return (
    <Container className={classes['badge']}>
        {data.map((item) => 
            <Card className={classes['badge__card']} key={item.id} item={item}/>
        )}
    </Container>
  )
}

export default Badge