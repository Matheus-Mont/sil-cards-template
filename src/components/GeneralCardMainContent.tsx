import React from 'react';
import { Text } from '@chakra-ui/react';
import CardPostTable from './CardPostTable';
import MainContentInterface from '../services/interfaces/mainContentInterface';

export default function GeneralCardMainContent({ content }: MainContentInterface) {
  return (
    <div>
      {typeof content === 'string' ? (
        <Text>{content}</Text>) : (<CardPostTable posts={content} />)}
    </div>
  );
}
