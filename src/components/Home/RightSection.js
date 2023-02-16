//components

import { Heading, Box, Flex, Text, Link } from "@chakra-ui/react";

export default function RightSectionPrivacy() {
  return (
    <Box bg="blue.700" h="300" w="sm">
      <Flex justify="center" mt="2">
        <Heading fontWeight="bold" fontSize="xl" color="white">
          Privacy Notice
        </Heading>
      </Flex>
      <Flex justify="center">
        <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2" mt="4"></Box>
      </Flex>

      <Box h="200" mt="5" mb="-3">
        <Text fontSize="xl" fontWeight="light" color="white" ml="2">
          Auburn Medical Center (AMC) is committed to protecting the security
          and privacy of our patient's information.{" "}
        </Text>
      </Box>

      <Flex justify="end" mr="3">
        <Box>
          <Link to="/">
            <Text color="white" fontWeight="bold">
              LEARN MORE
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
