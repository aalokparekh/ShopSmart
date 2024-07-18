import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import Description from './components/Description'
import Login from './components/Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/products/:id' element={<Description />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
