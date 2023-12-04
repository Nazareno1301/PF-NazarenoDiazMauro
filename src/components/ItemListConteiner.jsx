import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const itemsCollection = collection(db, 'ropa');
        let productosFiltrados;

        if (categoria) {
          const q = query(itemsCollection, where('categoria', '==', categoria));
          const snapshot = await getDocs(q);
          productosFiltrados = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        } else {
          const snapshot = await getDocs(itemsCollection);
          productosFiltrados = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        }

        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error obteniendo los productos:', error);
      }
    };

    obtenerProductos();
  }, [categoria, db]);

  return (
    <div>
      <h1 className='greeting'>{greeting}</h1>
      <div className='card'>
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
