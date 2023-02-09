// component
import React from "react";

// Chakra components
import { Box, Text, Flex } from "@chakra-ui/react";

export default function EmployeePage() {
  return (
    <Box as="section" bg="gray.100" h="500">
      <Flex justify="center">
        <Text fontSize="2xl">Employee Page Component</Text>
      </Flex>
    </Box>
  );
}
