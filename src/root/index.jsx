import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Layout/Container'
import Navbar from '../components/Navbar'
import { navbar } from '../utils/navbar'

const Root = () => {
  return (
    <Container>
        <Header/>
        <Navbar/>
        <Routes>
            {navbar.map((item) => 
                <Route key={item.id} path={item.path} element={item.Element}/>
            )}
        </Routes>
    </Container>
  )
}

export default Root