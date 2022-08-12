import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from "swiper";

import Container from '../../Layout/Container'
import Card from '../Badge/Card';
import classes from './SpecialDiscount.module.scss';
import 'swiper/css';
import "swiper/css/navigation";
import './SwiperCarousel.styles.scss';

const SpecialDiscount = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/discounts');
      const discounts = await res.json();
      setData(discounts);
    }

    fetchData();

  }, [])

  return (
    <Container>
      <h2 className={classes['title']}>Special Discount</h2>
      <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
        {data.map((item) => 
          <SwiperSlide key={item.id}><Card item={item}/></SwiperSlide>
        )}
      </Swiper>
    </Container>
  )
}

export default SpecialDiscount