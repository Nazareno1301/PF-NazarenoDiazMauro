import React from 'react'
import { Badge, Image } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  return (
    <div>
      <Badge variant='subtle' colorScheme='green'>
        <Link to="/cart" >

          <Image className='carrito'
            src="../src/assets/shopping-cart.png"
          />
        </Link>
        <ViewIcon />
        10
      </Badge>

    </div>
  )
}

export default CartWidget