import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      height="20"
      align="center"
      justify="center"
    >
      <Logo />
    </Flex>
  );
}