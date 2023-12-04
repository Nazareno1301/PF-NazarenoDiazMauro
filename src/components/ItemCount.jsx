import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartContext } from '../contexts/CartContext';

const ItemCount = ({ onAdd }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("La cantidad no puede ser negativa");
      setCount(0);
    }
  };

  const addToCartHandler = () => {
    onAdd(count);
    setCount(0);
  };

  return (
    <ButtonGroup size='md' isAttached variant='outline'>
      <IconButton onClick={decrement} icon={<MinusIcon />} />
      <Button>{count}</Button>
      <IconButton onClick={increment} icon={<AddIcon />} />
      <Button variant='solid' colorScheme='blue' onClick={addToCartHandler}>
        Agregar al carrito
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
