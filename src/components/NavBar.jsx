import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  IconButton,
  Button,
  useColorMode,
  Switch,
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png';
import { CartContext } from '../contexts/CartContext';

const NavBar = () => {
  const { vaciarCarrito, cantidadEnCarrito } = useContext(CartContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogoClick = () => {
    vaciarCarrito();
  };

  return (
    <Flex
  align="center"
  width="100%"
  justify="space-between"
  p="4"
  bg={colorMode === 'dark' ? 'blackAlpha.500' : 'white'} 
  color={colorMode === 'dark' ? 'white' : 'black'} 
>
      <Flex align="center">
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" mr="4" />
          <MenuList>
            <MenuItem>
              <Link to={`/categoria/indumentaria`}>Indumentaria</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/accesorios`}>Accesorios</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/categoria/elementos`}>Elementos</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to="/" onClick={handleLogoClick}>
          <Box className='logo' ml="4">
            <img src={logo} alt="" height="50px" />
          </Box>
        </Link>
      </Flex>
      <Flex align="center">
        {cantidadEnCarrito() > 0 && (
          <IconButton
            icon={<CartWidget />}
            variant="ghost"
            aria-label="Carrito"
            mr="4"
            fontSize="20px"
          />
        )}
        <Box mr="4">
          <Switch
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            size="md"
            colorScheme="teal"
          />
        </Box>
        <IconButton
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Cambiar Tema"
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
