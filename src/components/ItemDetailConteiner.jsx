import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = ({ greeting}) => {
  const productos =  [
    { id: 1, titulo: "producto A", descripcion: "descripcion del producto A", precio: 1000,categoria: "indumentaria", stock: 1, imagen:"../src/assets/remera1.png" },
    { id: 2, titulo: "producto B", descripcion: "descripcion del producto B", precio: 1500,categoria: "accesorios", stock: 3, imagen:"../src/assets/pesas.jpg" },
    { id: 3, titulo: "producto C", descripcion: "descripcion del producto C", precio: 1800,categoria: "indumentaria", stock: 5, imagen:"../src/assets/indumentaria.jpg"  },
    { id: 4, titulo: "producto D", descripcion: "descripcion del producto D", precio: 1900,categoria: "elementos", stock: 4, imagen:"../src/assets/pelota.jpg" }
];


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
          <ItemDetail productos={productos}/>
        </div>
  
      </div>
  
    )
  }
  

export default ItemDetailConteiner