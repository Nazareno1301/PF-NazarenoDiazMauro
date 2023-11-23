import React from 'react';
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  const imagenUrl = `../assets/${producto.imagen}`;

  return (
    <div className='card'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={imagenUrl} alt={`Imagen de ${producto.titulo}`} borderRadius='lg' />
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
          <ButtonGroup spacing='2'>
            <ItemCount />
            <Button variant='solid' colorScheme='blue'>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;