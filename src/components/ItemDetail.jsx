import React, { useContext, useState } from 'react';
import {
  Card, Stack, CardBody, CardFooter, Heading, Text, Divider, ButtonGroup,
  Image, Button
} from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

  const handleAgregarAlCarrito = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
    setCantidadSeleccionada(cantidad);
  };

 

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  const imagenUrl = `../assets/${producto.imagen}`;

  return (
    <div className='card'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={producto.imagen} alt={`Imagen de ${producto.titulo}`} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{producto.titulo}</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.precio}
            </Text>
            <Text>Stock disponible: {producto.stock}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {cantidadSeleccionada === 0 ? (
            <ButtonGroup spacing='2'>
              <ItemCount onAdd={handleAgregarAlCarrito} />
            </ButtonGroup>
          ) : (
            <Link to ="/cart">

            <Button variant='solid' colorScheme='teal'>
              ir al carrito
            </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
