// components
import React from "react";
import AMCImage from "../img/auburn-medical-front.jpg";

// Chakra components
import { Box, Text, HStack, Button, Flex, Image } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box bg="gray.200">
      <Flex justify="center">
        <Box as="section" bg="gray.500">
          <Box as="figure">
            <Image
              src={AMCImage}
              alt="Auburn Medical Center building"
              h="500"
              w="4xl"
            />
            <Box>
              <Text
                textAlign="center"
                fontSize="2xl"
                fontWeight="bold"
                color="white"
              >
                Questions About Your Patient Portal Account?
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
