import React from 'react'
import { useQuery } from 'react-query'
import Container from '../../Layout/Container'


const SpecialDiscount = () => {

const {data} = useQuery('discounts', async () => {const res = await fetch('http://localhost:4000/discounts')
return await res.json()})

  return (
    <Container>
      
    </Container>
  )
}

export default SpecialDiscount