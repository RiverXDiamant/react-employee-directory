// components
import React from "react";
import { Link } from "react-router-dom";
import AMCLogo from "../../img/auburn-medical-logo.png";

// Chakra components
import { Box, Flex, Text, HStack, Image, Button } from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Box>
        <Box as="nav">
          <Flex justify="center">
            <HStack>
              <Box mr="100">
                <Image
                  src={AMCLogo}
                  alt="Auburn Medical Center logo"
                  h="300"
                  w="300"
                />
              </Box>
              <Text>
                <Link to="/">Care and Treatment</Link>
              </Text>
              &nbsp;&nbsp;
              <Text>
                <Link to="/directory">Provider Directory</Link>
              </Text>
              &nbsp;&nbsp;
              <Link to="/">Patient and Visitor Info</Link>
              &nbsp;&nbsp;
              <Link to="/">About Us</Link>
              <Link to="/">
                <Button
                  size="md"
                  colorScheme="red"
                  color="white"
                  _hover="black"
                >
                  Make An Appointment
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
