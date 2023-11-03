import React, {useState} from 'react'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'

const App = () => {
 

  return (
    <div className='app'>
      <NavBar />
      <ItemListConteiner greeting={"Bienvenido a tu tienda de deporte"} />
    </div>
  )
}

export default App
