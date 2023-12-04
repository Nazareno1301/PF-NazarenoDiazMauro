import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../contexts/CartContext';

const ItemDetailContainer = ({ greeting }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarAlCarrito } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const oneItem = doc(db, 'ropa', id);
        const snapshot = await getDoc(oneItem);

        if (snapshot.exists()) {
          const docData = snapshot.data();
          setProducto(docData);
        }
      } catch (error) {
        console.error('Error obteniendo el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [id, db]);

  const handleAgregarAlCarrito = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: 'center', margin: '50px' }}>
          <h2>Cargando...</h2>
          <Spinner size="xl" color="blue.500" />
        </div>
      ) : (
        <>
          <h1 className='greeting'>{greeting}</h1>
          <div className='card'>
            <ItemDetail producto={producto} onAgregarAlCarrito={handleAgregarAlCarrito} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
