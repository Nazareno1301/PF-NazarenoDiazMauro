
  import React from 'react';
  import { useParams } from 'react-router-dom';
  import ItemList from './ItemList';
 
  
  const ItemListConteiner = ({ greeting }) => {
    const { categoria } = useParams();
  
      const productos = [
        { id: 1, titulo: "producto A", descripcion: "descripcion del producto A", precio: 1000,categoria: "indumentaria", stock: 1, imagen:"../src/assets/remera1.png" },
        { id: 2, titulo: "producto B", descripcion: "descripcion del producto B", precio: 1500,categoria: "accesorios", stock: 3, imagen:"../src/assets/pesas.jpg" },
        { id: 3, titulo: "producto C", descripcion: "descripcion del producto C", precio: 1800,categoria: "indumentaria", stock: 5, imagen:"../src/assets/indumentaria.jpg"  },
        { id: 4, titulo: "producto D", descripcion: "descripcion del producto D", precio: 1900,categoria: "elementos", stock: 4, imagen:"../src/assets/pelota.jpg" }
    ];
  
    // Filtrar productos por categoría
    const productosFiltrados = categoria
      ? productos.filter((producto) => producto.categoria === categoria)
      : productos;
  
    return (
      <div>
        <h1 className='greeting'>{greeting}</h1>
        <div className='card'>
          <ItemList productos={productosFiltrados} />
        </div>
      </div>
    );
  };
  
  export default ItemListConteiner;