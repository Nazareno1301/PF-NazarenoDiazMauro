import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='contenedor-navegacion'>
      <Flex className='navegacion'>
        <Menu>
          <MenuButton as={Button}>CATEGORIAS</MenuButton>
          <MenuList>
            <MenuItem>
            <Link to={`/categoria/indumentaria`}>indumentaria</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/accesorios`}>accesorios</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/elementos`}>elementos</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Link to="/">
          <Box className='logo' p='4'>
            <img src={logo} alt="" />
          </Box>
        </Link>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
