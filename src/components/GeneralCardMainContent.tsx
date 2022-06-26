import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import CardPostTable from './CardPostTable';

export default function GeneralCardMainContent({ type }: MainContentInterface) {
  return (
    <div>
      {type === 'cases' ? (
        <Text>{teste2}</Text>) : (<CardPostTable posts={teste} />)}
    </div>
  );
}
