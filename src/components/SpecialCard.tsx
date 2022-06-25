import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import CardLink from './CardLink';
import SpecialCardInterface from '../services/interfaces/specialCardInterface';

export default function SpecialCard({ link }: SpecialCardInterface) {
  return (
    <article>
      <Flex>
        <AiTwotoneStar />
        <Text>Trustpilot</Text>
        <Text>
          Show us love bu leaving a
          <span style={{ color: 'green' }}> positivo</span>
          {' '}
          review on trust pilot and recieve the extension of 50 additional products.
        </Text>
        <CardLink text={link.text} href={link.href} />
      </Flex>
    </article>
  );
}
