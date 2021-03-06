import React from 'react';
import {
  Center, Flex, Select, Text,
} from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import CardHeaderIcon from './CardHeaderIcon';
import CardHeaderInterface from '../services/interfaces/cardHeaderInterface';

export default function CardHeader({
  icon, title, options, select, newSearch,
}: CardHeaderInterface) {
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <CardHeaderIcon icon={icon} />
        <Text
          mx={4}
          color="#1a365d"
          fontSize={{
            base: 'md', md: '1.3rem', lg: '1.3rem', xl: '1rem',
          }}
          fontWeight="800"
        >
          {title}
        </Text>
      </Flex>
      {select && (
      <Center>
        <Select
          variant="unstyled"
          color="gray.500"
          fontWeight="bold"
          fontSize="sm"
          size="lg"
          icon={<MdArrowDropDown />}
          onChange={newSearch}
        >
          {options.map((option) => (
            <option key={option} value={option.toLocaleLowerCase()}>{option}</option>
          ))}
        </Select>
      </Center>
      )}
    </Flex>
  );
}
