import React from 'react'
import { Badge } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'


const CartWidget = () => {
  return (
    <div>
      <Badge variant='subtle' colorScheme='green'>
        <h5>Carrito</h5>
        <ViewIcon />
        10
      </Badge>

    </div>
  )
}

export default CartWidget