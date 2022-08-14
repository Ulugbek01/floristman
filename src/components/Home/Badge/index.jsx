import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Container from '../../Layout/Container'
import SpecialDiscount from '../SpecialDiscount';
import classes from './Badge.module.scss';
import Card from './Card';

const Badge = () => {
  const { type} = useParams();
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // useQuery([type], async () => {
  //   const res = await fetch(`http://localhost:4000/products?category=${type}`);
  //   return await res.json();},
  //   {
  //     onSuccess: (res) => {
  //       setData(res);
  //     }
  //   } 
  // )

  const fetchData = async () => {
    const res = await fetch(`http://localhost:4000/products?category=${type}`);
    const cards = await res.json();
    setData(cards);
  }

  useEffect(() => {
    fetchData();
  }, [type])
 
   return (
    <Container>
      <h3 className={classes['title']}>{pathname.slice(10).charAt(0).toUpperCase() + pathname.slice(11)}</h3>
      <div className={classes['badge']}>
        {data.map((item) => 
            <Card onClick={() => navigate(`/products/${item.id}`)} className={classes['badge__card']} key={item.id} item={item}/>
        )}
      </div>

      {pathname === `/category/${type}` ? <SpecialDiscount/> : ''}
    </Container>
  )
}

export default Badge