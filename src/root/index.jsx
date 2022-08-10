import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import Badge from '../components/Home/Badge'
import Navbar from '../components/Navbar'
import Product from '../components/Product'

const Root = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/category/:type' element={<Badge/>} />
          <Route path='/products/:id' element={<Product/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Root