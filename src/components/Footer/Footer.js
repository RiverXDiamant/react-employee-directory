// components
import React from "react";

// Chakra components
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="purple.200" h="200">
      <Flex justify="center">
        <Text fontSize="xl">Footer Component</Text>
      </Flex>
    </Box>
  );
}
