import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { obtenerProductoPorId } from '../Productos';

const ItemDetailConteiner = ({ greeting }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    obtenerProductoPorId(id)
      .then((producto) => {
        setProducto(producto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1 className='greeting'>{greeting}</h1>
      <div className='card'>
        <ItemDetail producto={producto} />
      </div>
    </div>
  );
};

export default ItemDetailConteiner;