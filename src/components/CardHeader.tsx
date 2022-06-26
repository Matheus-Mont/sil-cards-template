import React from 'react';
import {
  Center, Flex, Select, Text,
} from '@chakra-ui/react';
import CardHeaderIcon from './CardHeaderIcon';
import CardHeaderInterface from '../services/interfaces/cardHeaderInterface';

export default function CardHeader({
  icon, title, options, select, newSearch,
}: CardHeaderInterface) {
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <CardHeaderIcon icon={icon} />
        <Text mx={4} color="#1a365d" fontSize="lg" fontWeight="800">{title}</Text>
      </Flex>
      {select && (
      <Center>
        <Select variant="unstyled" color="gray.500" fontWeight="bold" fontSize="sm" size="lg" onChange={newSearch}>
          {options.map((option) => (
            <option key={option} value={option.toLocaleLowerCase()}>{option}</option>
          ))}
        </Select>
      </Center>
      )}
    </Flex>
  );
}
