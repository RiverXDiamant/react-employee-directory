// components
import {
  Box,
  Text,
  Flex,
  Stack,
  HStack,
  Icon,
  StackProps,
  Button,
} from "@chakra-ui/react";

export default function CareOptions() {
  return (
    <Box bg="gray.300" h="300" w="4xl" mt="10" textAlign="center">
      <Flex justify="center">
        <Box bg="blue.200" h="300" mr="5">
          <Button colorScheme="blue" size="lg">
            Find A Doctor
          </Button>
          <Box as="p">dlskajfkldf</Box>
        </Box>

        <Box bg="blue.200" h="300" mr="5">
          <Button colorScheme="blue" size="lg">
            MyChart
          </Button>
          <Text>dsfdsfdsl</Text>
        </Box>

        <Box bg="blue.200" h="300" mr="5">
          <Button colorScheme="blue" size="lg">
            Pay Your Bill
          </Button>
          <Text>Lorem</Text>
        </Box>

        <Box bg="blue.200" h="300" mr="5">
          <Button colorScheme="blue" size="lg">
            Locations
          </Button>
          <Text>Lorem</Text>
        </Box>
      </Flex>
    </Box>
  );
}
