//components
import { Link } from "react-router-dom";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";

export default function LeftSectionBio() {
  return (
    <Box bg="blue.700" h="300" w="sm" mr="5">
      <Flex justify="center" mt="2">
        <Heading fontWeight="bold" fontSize="xl" color="white">
          Why AMC?
        </Heading>
      </Flex>
      <Flex justify="center">
        <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2" mt="3"></Box>
      </Flex>

      <Box h="200" mt="5" mb="-3">
        <Text fontSize="xl" fontWeight="light" color="white" ml="2">
          We are here to work with you every step of the way to keep our
          communities healthy. At your service are our nationally recognized
          physicians, lead-edge technology and world-class facilities.
          Excellence, caring and integrity guid our everyday behaviors.
        </Text>
      </Box>

      <Flex justify="end" mr="3">
        <Box>
          <Link to="/">
            <Text color="white">LEARN MORE</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
