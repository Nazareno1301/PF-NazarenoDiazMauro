import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = ({ greeting}) => {
  const productos =  [
    { id: 1, titulo: "Remera Adidas", descripcion: "Descubre la nueva Remera Adidas Azul fusiona estilo y rendimiento para tu vida activa. Confeccionada con tejido de alta calidad que te mantiene fresco y seco.", precio: 11000,categoria: "indumentaria", stock: 2, imagen:"../src/assets/remera1.png" },
    { id: 2, titulo: "Mancuerna rusa", descripcion: "Descubre la Mancuerna Rusa, tu aliada perfecta para potenciar tus entrenamientos. Con un diseño ergonómico y un asa antideslizante, esta mancuerna te ofrece un agarre seguro y cómodo. ", precio: 9500,categoria: "accesorios", stock: 3, imagen:"../src/assets/pesas.jpg" },
    { id: 3, titulo: "Zapatillas nike", descripcion: "Sumérgete en la innovación y el estilo con las Zapatillas Nike, una fusión perfecta de rendimiento y moda. Estas zapatillas, diseñadas con la última tecnología de amortiguación y soporte, ofrecen una experiencia de uso inigualable. ", precio: 30000,categoria: "indumentaria", stock: 5, imagen:"../src/assets/indumentaria.jpg"  },
    { id: 4, titulo: "Pelota de futbol", descripcion: "Experimenta la emoción del juego con la Pelota de Fútbol de última generación. Diseñada para ofrecer un rendimiento excepcional en el campo, esta pelota combina durabilidad y precisión. Su cubierta resistente y costuras reforzadas aseguran un toque suave y un vuelo preciso en cada pase y disparo.", precio: 19000,categoria: "elementos", stock: 4, imagen:"../src/assets/pelota.jpg" }
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