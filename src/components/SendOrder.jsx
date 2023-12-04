import React, { useState, useContext } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../contexts/CartContext';
import { useColorMode, Container, Heading, Box, Input, Button, VStack } from '@chakra-ui/react';

const SendOrder = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const { carrito, vaciarCarrito } = useContext(CartContext);
  const db = getFirestore();
  const { colorMode } = useColorMode();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificacion de datos
    if (!nombre || !email) {
      console.error('Nombre y email son obligatorios.');
      return;
    }

    const orderCollection = collection(db, 'ordenes');

    try {
      console.log('Contenido del carrito antes de enviar la orden:', carrito);

      const productosOrden = carrito.map(({ Descripcion, precio }) => {
        // verificacion de datos
        if (!Descripcion || !precio) {
          console.error('Descripción y precio son obligatorios para cada producto.');
          return null;
        }

        return {
          nombre: Descripcion,
          precio,
        };
      });

      // Validaxion de productos
      const productosValidos = productosOrden.filter((producto) => producto !== null);

      const docRef = await addDoc(orderCollection, {
        comprador: {
          nombre,
          email,
        },
        productos: productosValidos,
      });

      setId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al agregar la orden:', error);
    }
  };

  

  return (
    <Container maxW='md' mt={8}>
      <Heading mb={4}>Formulario de Compra</Heading>
      <Box
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        p={8}
        borderRadius='md'
        boxShadow='md'
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              type='text'
              placeholder='Nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              variant='filled'
            />
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant='filled'
            />
            <Button type='submit' colorScheme='teal' size='lg' w='full'>
              Enviar
            </Button>
          </VStack>
        </form>
      </Box>
      <p>Id de la compra: {id}</p>
    </Container>
  );
};

export default SendOrder;
