import React, { useState } from 'react'
import ShoppingCartContext from './contexts/ShoppingCartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import About from './components/About'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {


  return (
    <div className='app'>
      <BrowserRouter>
        <ShoppingCartContext>
          <NavBar />
          <Home />
        </ShoppingCartContext>
        <Routes>
          <Route exact path='/' element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path="/itemlistconteiner" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
          <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
          <Route exact path="/categoria/:categoria" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
