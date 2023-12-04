
import React from 'react';
import { Box, Text, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box width= "100%"p="4" bg="black" color="gray.500">
      <Flex align="center" justify="space-between">
        <Text>&copy; 2023 SportStore. Todos los derechos reservados.</Text>
        <Box>
          <Link href="https://www.facebook.com/" isExternal mx="2">
            <IconButton icon={<FaFacebook />} aria-label="Facebook" colorScheme="whiteAlpha" />
          </Link>
          <Link href="https://twitter.com/" isExternal mx="2">
            <IconButton icon={<FaTwitter />} aria-label="Twitter" colorScheme="whiteAlpha" />
          </Link>
          <Link href="https://www.instagram.com/" isExternal mx="2">
            <IconButton icon={<FaInstagram />} aria-label="Instagram" colorScheme="whiteAlpha" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
