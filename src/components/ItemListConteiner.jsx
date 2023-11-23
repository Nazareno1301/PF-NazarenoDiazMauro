
  import React, {useEffect, useState} from 'react';
  import { useParams } from 'react-router-dom';
  import ItemList from './ItemList';
  import {obtenerProductos} from '../Productos';
 
  
  const ItemListConteiner = ({ greeting }) => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      obtenerProductos().then((productos) => {
        const productosFiltrados = categoria
          ? productos.filter((producto) => producto.categoria === categoria)
          : productos;
        setProductos(productosFiltrados);
      });
    }, [categoria]);
    return (
      <div>
        <h1 className='greeting'>{greeting}</h1>
        <div className='card'>
          <ItemList productos={productos} />
        </div>
      </div>
    );
  };
  
  export default ItemListConteiner;