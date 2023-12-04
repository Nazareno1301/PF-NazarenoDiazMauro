import React, { useEffect, useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListConteiner from './components/ItemListConteiner';
import About from './components/About';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import SendOrder from './components/SendOrder';

const App = () => {
  return (
    <div className='app'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Home />
          <Routes>
            <Route exact path='/' element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/itemlistconteiner" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
            <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
            <Route exact path="/categoria/:categoria" element={<ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />} />
            <Route exact path='/checkout' element={<SendOrder/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
        
      </CartProvider>
    </div>
  );
}

export default App;
