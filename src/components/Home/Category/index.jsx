import React from 'react'
import { useNavigate } from 'react-router-dom';
import categories from '../../../utils/categories';
import Container from '../../Layout/Container';
import classes from './Category.module.scss';

const Category = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>{}</h3>
      <div className={classes['category']}>
        {categories.map((category) => 
          <div key={category.id} className={classes['category__card']}>
            <img src={category.image} alt="category-img" />
            <button onClick={() => navigate(`${category.path}`)} className={classes['category__btn']}>{category.title}</button>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Category