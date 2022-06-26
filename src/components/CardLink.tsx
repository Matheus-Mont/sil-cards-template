import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import CardLinkInterface from '../services/interfaces/cardLinkInterface';

export default function CardLink({ text, href }: CardLinkInterface) {
  return (
    <Link href={href}>
      <Flex alignItems="center" as="u" color="#90CDF4" fontWeight="bold">
        <Text mr="1">
          {text}
        </Text>
        <HiArrowRight />
      </Flex>
    </Link>

  );
}
