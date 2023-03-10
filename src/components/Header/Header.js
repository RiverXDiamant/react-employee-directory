// components
import React from "react";

// Chakra components
import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="blue.700" color="white">
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

      <Flex justify="center">
        If you have a medical emergency, visit one of our&nbsp;&nbsp;
        <Link>Emergency Care Centers</Link>
      </Flex>
    </Box>
  );
}
