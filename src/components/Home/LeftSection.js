//components
import { Heading, Box, Flex } from "@chakra-ui/react";

export default function LeftSectionBio() {
  return (
    <Box bg="blue.700" h="300" w="md" mr="5">
      <Flex justify="center">
        <Heading fontWeight="bold" fontSize="xl" color="white">
          Why AMC?
        </Heading>
      </Flex>
    </Box>
  );
}
