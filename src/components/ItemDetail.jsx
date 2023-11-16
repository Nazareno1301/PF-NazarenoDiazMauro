import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail= ({ productos }) => {
    const {id} = useParams () 

    const findDeProductos = productos.find((producto)=>producto.id === id)

    return (
        <div className='card' >
            {findDeProductos.map((p) => (
                <div key={p.id}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>producto: {p.titulo}</Heading>
                                <Text>{p.descripcion}</Text>
                                <Text color='blue.600' fontSize='2xl'>${p.precio}</Text>
                                <Text>{p.stock}</Text>

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
                        <Item />
                    </Card>
                </div>
            ))}
        </div>
    );
};
export default ItemDetail