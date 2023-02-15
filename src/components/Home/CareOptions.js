// components
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookMedical,
  FaAddressBook,
  FaMoneyCheckAlt,
  FaHospital,
} from "react-icons/fa";

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
    <Box h="200" w="4xl" mt="10" textAlign="center">
      <Flex justify="center">
        <Box h="100" mr="5">
          <Link to="/directory">
            <Button colorScheme="blue" size="lg">
              <FaBookMedical /> &nbsp;&nbsp;Find A Doctor
            </Button>
          </Link>

          <Text as="p">Choose a Provider</Text>
        </Box>

        <Box h="100" mr="5">
          <Link
            to={{ pathname: "https://mychart.org/" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button colorScheme="blue" size="lg">
              <FaAddressBook />
              &nbsp;&nbsp; MyChart
            </Button>
          </Link>

          <Text as="p">Login or Sign Up</Text>
        </Box>

        <Box h="200" mr="5">
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

        <Box h="200" mr="5">
          <Button colorScheme="blue" size="lg">
            <FaHospital />
            &nbsp;&nbsp; Locations
          </Button>

          <ListItem>
            <Link to="/">Atlanta</Link>
          </ListItem>
          <ListItem>
            <Link to="/">Powder Springs</Link>
          </ListItem>
          <ListItem>
            <Link to="/">College Park</Link>
          </ListItem>
        </Box>
      </Flex>
    </Box>
  );
}
