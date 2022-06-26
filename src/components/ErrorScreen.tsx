import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';

interface ErrorInterface {
  value: string;
  apiRequest: (value: string) => void;
}

export default function ErrorScreen({ value, apiRequest }: ErrorInterface) {
  return (
    <Flex>
      <RiErrorWarningFill />
      <Text>Request failed!</Text>
      <Button onClick={() => apiRequest(value)}>Reload</Button>
    </Flex>
  );
}
