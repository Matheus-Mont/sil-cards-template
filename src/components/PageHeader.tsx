import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/logo.png';

export default function PageHeader() {
  return (
    <header>
      <Box bg="#63B3ED" borderTopRadius="30" m={1} minH="150px">
        <Image
          src={logo}
          pos="absolute"
          top="5"
          left="30vh"
          alt="sil-sistemas-logo"
        />
      </Box>
    </header>
  );
}
