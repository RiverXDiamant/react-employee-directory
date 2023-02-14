// components
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import AMCLogo from "../../img/auburn-medical-logo.png";

// Chakra components
import { Box, Flex, HStack, Image, Button } from "@chakra-ui/react";

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
              <FaHome />
              <Link to="/"> Home |</Link>
              &nbsp;&nbsp;
              <Link to="/">Care and Treatment |</Link>
              &nbsp;&nbsp;
              <Link to="/directory">Provider Directory |</Link>
              &nbsp;&nbsp;
              <Link to="/">Patient and Visitor Info |</Link>
              &nbsp;&nbsp;
              <Link to="/">Contact Us</Link>
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
