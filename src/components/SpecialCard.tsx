import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import CardLink from './CardLink';
import SpecialCardInterface from '../services/interfaces/specialCardInterface';

export default function SpecialCard({ link }: SpecialCardInterface) {
  return (
    <Flex
      borderRadius="10"
      direction="column"
      boxShadow="xl"
      w={{
        base: '40vh', md: '40vh', lg: '47vh', xl: '43vh',
      }}
      h={{
        base: '20vh', md: '20vh', lg: '20vh', xl: '20vh',
      }}
      color="white"
      bg="#1A365D"
      p={4}
      m={2}
    >
      <Flex alignItems="center">
        <AiTwotoneStar color="#48BB78" size="3vh" />
        <Text fontWeight="bold" fontSize="lg" ml="1">Trustpilot</Text>
      </Flex>
      <Flex grow="1" alignItems="center">
        <Text maxWidth="80%" fontSize="small" fontWeight="bold">
          Show us love bu leaving a
          <span style={{ color: '#48BB78' }}> positive</span>
          {' '}
          review on trust pilot and recieve the extension of 50 additional products.
        </Text>
      </Flex>
      <CardLink text={link.text} href={link.href} color="#48BB78" arrow={link.arrow} />
    </Flex>
  );
}
