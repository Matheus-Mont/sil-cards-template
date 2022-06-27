import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { RiErrorWarningFill } from 'react-icons/ri';

interface ErrorInterface {
  value: string;
  newSearch: ({ target }: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ErrorScreen({ value, newSearch }: ErrorInterface) {
  return (
    <Flex grow="1" alignItems="center" justifyContent="space-around" bg="#FED7D7" borderRadius="10px" p="2">
      <RiErrorWarningFill size="6vh" color="#E53E3E" />
      <Text color="#1a365d" fontWeight="bold">Request failed!</Text>
      <Button boxShadow="2xl" name={value} onClick={newSearch}>Reload</Button>
    </Flex>
  );
}
