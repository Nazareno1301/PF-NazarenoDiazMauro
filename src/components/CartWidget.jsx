import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Box>
        <Badge colorScheme="teal" variant="solid" fontSize="1rem">
          <IconButton
            icon={<FiShoppingCart />}
            aria-label="Carrito de Compras"
            variant="ghost"
            size="md"
          />
          {cantidadEnCarrito()}
        </Badge>
      </Box>
    </Link>
  );
};

export default CartWidget;
