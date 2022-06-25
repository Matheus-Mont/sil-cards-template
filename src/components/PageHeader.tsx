import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/logo.png';

export default function PageHeader() {
  return (
    <header>
      <Box bg="blue">
        <Image src={logo} alt="logo" />
      </Box>
    </header>
  );
}
