// components
import React from "react";
import {
  FaBookMedical,
  FaAddressBook,
  FaMoneyCheckAlt,
  FaHospital,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { Box, Text, Flex, Stack, Button } from "@chakra-ui/react";

// Button List Items

export const ListItem = (props) => {
  const { children, ...rest } = props;

  return (
    <Stack as="li" spacing="5px" {...rest} alignItems="center">
      <Text textAlign="center">{children}</Text>
    </Stack>
  );
};

export default function CareOptions() {
  return (
    <Box bg="gray.300" h="300" w="4xl" mt="10" textAlign="center">
      <Flex justify="center">
        <Box bg="blue.200" h="100" mr="5">
          <Link to="/directory">
            <Button colorScheme="blue" size="lg">
              <FaBookMedical /> &nbsp;&nbsp;Find A Doctor
            </Button>
          </Link>

          <Text as="p">Choose a Provider</Text>
        </Box>

        <Box bg="blue.200" h="100" mr="5">
          <Button colorScheme="blue" size="lg">
            <FaAddressBook />
            &nbsp;&nbsp; MyChart
          </Button>
          <Text as="p">Login or Sign Up</Text>
        </Box>

        <Box bg="blue.200" h="200" mr="5">
          <Button colorScheme="blue" size="lg">
            <FaMoneyCheckAlt />
            &nbsp;&nbsp; Pay Your Bill
          </Button>

          <ListItem>
            <Link to="/">Online Bill Pay</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Financial Assistance</Link>
          </ListItem>
          <ListItem>
            <Link to="/">FAQ</Link>
          </ListItem>
        </Box>

        <Box bg="blue.200" h="300" mr="5">
          <Button colorScheme="blue" size="lg">
            <FaHospital />
            &nbsp;&nbsp; Location
          </Button>
          <Text>Lorem</Text>
        </Box>
      </Flex>
    </Box>
  );
}
