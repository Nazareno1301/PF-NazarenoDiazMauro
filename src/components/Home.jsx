import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'
const Home = () => {
  const {cart, setCart, comision} = useContext(CartContext)

  return (
    <div>{comision}</div>
  )
}

export default Home