// components
import React from "react";

import { LoremIpsum } from "react-lorem-ipsum";

// Chakra components
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="purple.200" h="400">
      <Flex justify="center">
        <Text fontSize="xl">Footer Component</Text>
      </Flex>

      <Flex>
        <LoremIpsum p={3} />
      </Flex>
    </Box>
  );
}
