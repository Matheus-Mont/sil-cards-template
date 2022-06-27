import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MainContentInterface from '../services/interfaces/mainContentInterface';

export default function GeneralCardMainContent({ content }: MainContentInterface) {
  return (
    <Flex flexGrow="1" alignItems="center">
      <Text fontSize="4xl" color="#1a365d" fontWeight="normal">{content.cases}</Text>
    </Flex>
  );
}
