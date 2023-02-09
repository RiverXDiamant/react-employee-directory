// components
import React from "react";

// Chakra components
import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="blue.700" color="white" _hover="gray.50">
      <Flex justify="center">
        <Text fontSize="2xl" fontWeight="bold">
          <Link
            href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
            isExternal
          >
            COVID-19 RESOURCES, SYMPTOM CHECKER & SAFETY CENTER
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}
