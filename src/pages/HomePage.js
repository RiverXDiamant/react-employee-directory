// components
import React from "react";
import AMCImage from "../img/auburn-medical-front.jpg";
import CareOptions from "../components/Home/CareOptions";

// Chakra components
import { Box, Flex, Image } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <Flex justify="center">
        <Box as="figure">
          <Image
            src={AMCImage}
            alt="Auburn Medical Center building"
            h="500"
            w="4xl"
          />
        </Box>
      </Flex>

      <Flex justify="center">
        <CareOptions />
      </Flex>
      <Flex justify="center">
        <Box as="hr" bg="blue.700" h="0.5" w="4xl" mb="20"></Box>
      </Flex>
    </Box>
  );
}
