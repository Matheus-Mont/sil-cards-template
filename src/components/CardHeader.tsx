import React from 'react';
import { Flex, Select, Text } from '@chakra-ui/react';
import CardHeaderIcon from './CardHeaderIcon';

interface CardHeader {
  icon: string;
  title: string;
  options: string[];
}

export default function CardHeader({ icon, title, options }: CardHeader) {
  return (
    <Flex>
      <CardHeaderIcon icon={icon} />
      <Text>{title}</Text>
      <Select>
        {options.map((option) => (
          <option key={option} value={option.toLocaleLowerCase()}>{option}</option>
        ))}
      </Select>
    </Flex>
  );
}
