// components
import React from "react";

// Chakra components
import { Box, Text, HStack, Button, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box as="section" bg="gray.100" h="500">
      <Flex justify="center">
        <Text>Home Page Component</Text>
      </Flex>
    </Box>
  );
}
