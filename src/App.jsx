import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import About from './components/About'
import Cart from './components/Cart'
import ItemDetailConteiner from './components/ItemDetailConteiner'

const App = () => {


  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path="/itemlistconteiner" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
          <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
          <Route exact path="/categoria/:categoria" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"}/>} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
