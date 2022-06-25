import React from 'react';
import { Flex, Select, Text } from '@chakra-ui/react';
import CardHeaderIcon from './CardHeaderIcon';
import CardHeaderInterface from '../services/interfaces/cardHeaderInterface';

export default function CardHeader({
  icon, title, options, select,
}: CardHeaderInterface) {
  return (
    <Flex>
      <CardHeaderIcon icon={icon} />
      <Text>{title}</Text>
      {select && (
      <Select>
        {options.map((option) => (
          <option key={option} value={option.toLocaleLowerCase()}>{option}</option>
        ))}
      </Select>
      )}
    </Flex>
  );
}
