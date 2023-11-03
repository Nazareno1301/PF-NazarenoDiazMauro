import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button} from '@chakra-ui/react'

import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div className='contenedor-navegacion'>
      <Flex className='navegacion'>
        <Menu>
          <MenuButton as={Button}>
            CATEGORIAS
          </MenuButton>
          <MenuList >
            <MenuItem>Indumentaria</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Elementos</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box className='logo' p='4'>
          <img src={logo} alt="" />
        </Box>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>

    </div>
  )
}

export default NavBar