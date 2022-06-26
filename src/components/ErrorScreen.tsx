import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';

interface ErrorInterface {
  value: string;
  newSearch: ({ target }: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ErrorScreen({ value, newSearch }: ErrorInterface) {
  return (
    <Flex>
      <RiErrorWarningFill />
      <Text>Request failed!</Text>
      <Button name={value} onClick={newSearch}>Reload</Button>
    </Flex>
  );
}
