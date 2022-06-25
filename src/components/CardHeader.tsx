import React from 'react';
import { Flex, Select, Text } from '@chakra-ui/react';

export default function CardHeader() {
  return (
    <Flex>
      Icon
      <Text>Title</Text>
      <Select>
        <option>Option 1</option>
      </Select>
    </Flex>
  );
}
