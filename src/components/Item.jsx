import React from 'react';
import {
  Card, Stack, CardBody, CardFooter, Heading, Text, Divider, ButtonGroup,
  Button, Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

  return (
    <div>
      <Card  maxW='sm'>
        <CardBody>
          <Image className='imagen'
            src= {producto.imagen}
            alt={`Imagen de ${producto.titulo}`}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>producto: {producto.titulo}</Heading>
            <Text color='blue.600' fontSize='2xl'>${producto.precio}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              <Link to={`/item/${producto.id}`}>
                Ver Detalle
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
