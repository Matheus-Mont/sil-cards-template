import {
  Flex,
  Table, Tbody, Td, Text, Tr,
} from '@chakra-ui/react';
import React from 'react';
import TableInterface from '../services/interfaces/tableInterface';

export default function CardPostTable({ content }: TableInterface) {
  return (
    <Flex direction="column" grow="1" justifyContent="center">
      {content.map((post) => (
        <Flex key={post.views} justifyContent="space-between">
          <Text color="#718096" fontWeight="bold" fontSize="small" maxW="70%">{post.postTitle}</Text>
          <Text color="#1a365d" fontWeight="bold">{post.views}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
