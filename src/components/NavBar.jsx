import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div className='contenedor-navegacion'>
      <Flex className='navegacion'>
        <Box className='logo' p='4'>
          SS
        </Box>
        <Spacer />
        <Menu>
          <MenuButton as={Button}>
            ¿Que estas Buscando?
          </MenuButton>
          <MenuList >
            <MenuItem>Indumentaria</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Elementos</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>

    </div>
  )
}

export default NavBar