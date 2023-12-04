import React, { useState, useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container, Heading, List, ListItem, Spacer, useColorMode } from '@chakra-ui/react';
import { CartContext } from '../contexts/CartContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import SendOrder from './SendOrder';

  
const Cart = () => {
  const { carrito, eliminarDelCarrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const db = getFirestore();
  const { colorMode, toggleColorMode } = useColorMode();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    const obtenerProductosCarrito = async () => {
      try {
        const productosEnCarrito = await Promise.all(
          carrito.map(async (producto) => {
            if (!producto.id) {
              console.error('Error: ID del producto no está definida correctamente.', producto);
              return null;
            }
  
            const itemDoc = doc(db, 'ropa', producto.id);
            const itemSnapshot = await getDoc(itemDoc);
  
            if (itemSnapshot.exists()) {
              const itemData = itemSnapshot.data();
              return { ...itemData, cantidad: producto.cantidad };
            }
  
            return null;
          })
        );
  
        setProductosCarrito(productosEnCarrito.filter((producto) => producto !== null));
      } catch (error) {
        console.error('Error obteniendo productos del carrito desde Firebase:', error);
      }
    };
  
    obtenerProductosCarrito();
  }, [carrito, db]);

  const handleTerminarCompra = () => {
    alert('Compra finalizada');
    setMostrarFormulario(true);

  };

  console.log('Carrito:', carrito);
  console.log('Productos en el carrito:', productosCarrito);

  return (
    <Container  bg={colorMode === 'dark' ? 'blackAlpha.500' : 'white'} 
    maxW='container.md' mt={8}>
      <Heading mb={4}>Carrito de Compras</Heading>
      {carrito.length === 0 ? (
        <Box>
          <p>El carrito está vacío.</p>
        </Box>
      ) : (
        <Box>
          <List spacing={3} color={colorMode === 'dark' ? 'black' : 'black'} >
            {productosCarrito.map((producto) => (
              <ListItem key={producto.id} bg='gray.100' p={4} borderRadius='md' >
                <Box>
                  <strong>{producto.Nombre}</strong> - Cantidad: {producto.cantidad}
                  <br />
                  Precio unitario: ${producto.precio}
                  <br />
                  Subtotal: ${producto.precio * producto.cantidad}
                </Box>
                <Spacer />
                <Box>
                  <Button
                    colorScheme='blue'
                    size='sm'
                    onClick={() => eliminarDelCarrito(producto.id)}
                  >
                    Eliminar
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>
          <Box mt={4}>
            <strong>Precio Total:</strong> ${precioTotal()}
          </Box>
        </Box>
      )}
      <Box mt={4}>
        <ButtonGroup size='md'>
          <Button as={Link} to='/'>
            Seguir Comprando
          </Button>
          <Button as={Link} to='/checkout' variant='solid' colorScheme='teal' onClick={handleTerminarCompra}>
            Terminar Compra
          </Button>
        </ButtonGroup>
      </Box>
      {mostrarFormulario && <SendOrder />}
    </Container>
  );
};

export default Cart;
