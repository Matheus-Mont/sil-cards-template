import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import CardLinkInterface from '../services/interfaces/cardLinkInterface';

export default function CardLink({
  text, href, color, arrow,
}: CardLinkInterface) {
  return (
    <Link href={href}>
      <Flex alignItems="center" as="u" color={color} fontWeight="bold">
        <Text mr="1" fontFamily="cursive">
          {text}
        </Text>
        {arrow && <HiArrowRight />}
      </Flex>
    </Link>

  );
}
