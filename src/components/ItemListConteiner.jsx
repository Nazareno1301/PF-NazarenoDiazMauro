import React from 'react'
import ItemList from './ItemList'


const ItemListConteiner = ({ greeting}) => {
  const productos = [
    { id: 1, titulo: "producto A", descripcion: "descripcion del producto A", precio: 1000, stock: 1 },
    { id: 2, titulo: "producto B", descripcion: "descripcion del producto B", precio: 1500, stock: 3 },
    { id: 3, titulo: "producto C", descripcion: "descripcion del producto C", precio: 1800, stock: 5 },
    { id: 4, titulo: "producto D", descripcion: "descripcion del producto D", precio: 1900, stock: 4 }
  ]
 
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    }
    else {
      reject("no se encontraon productos")
    }

  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })

    .catch((error) => {
      console.log(error)
    })


  return (
    <div >
      <h1 className='greeting'>
        {greeting}
      </h1>
      <div className='card' >
        <ItemList productos={productos}/>
      </div>

    </div>

  )
}

export default ItemListConteiner