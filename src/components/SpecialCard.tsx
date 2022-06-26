import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import CardLink from './CardLink';
import SpecialCardInterface from '../services/interfaces/specialCardInterface';

export default function SpecialCard({ link }: SpecialCardInterface) {
  return (
    <article>
      <Flex
        borderRadius="10"
        direction="column"
        boxShadow="xl"
        w="50vh"
        color="white"
        bg="#1A365D"
        p={4}
        m={2}
      >
        <Flex alignItems="center">
          <AiTwotoneStar color="#48BB78" size="3vh" />
          <Text fontWeight="bold" fontSize="lg" ml="1">Trustpilot</Text>
        </Flex>
        <Text maxWidth="70%" fontSize="sm">
          Show us love bu leaving a
          <span style={{ color: '#48BB78' }}> positive</span>
          {' '}
          review on trust pilot and recieve the extension of 50 additional products.
        </Text>
        <CardLink text={link.text} href={link.href} color="#48BB78" />
      </Flex>
    </article>
  );
}
