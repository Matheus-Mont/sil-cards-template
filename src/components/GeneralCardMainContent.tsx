import React from 'react';
import { Text } from '@chakra-ui/react';
import CardPostTable from './CardPostTable';
import MainContentInterface from '../services/interfaces/mainContentInterface';

export default function GeneralCardMainContent({ content }: MainContentInterface) {
  return (
    <div>
      <Text>{content.cases}</Text>
    </div>
  );
}
