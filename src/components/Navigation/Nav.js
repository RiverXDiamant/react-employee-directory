// components
import React from "react";
import { Link } from "react-router-dom";
import AMCLogo from "../../img/auburn-medical-logo.png";

// Chakra components
import { Box, Flex, HStack, Image } from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Box h="150">
        <Box as="nav">
          <Flex justify="center">
            <HStack>
              <Box>
                <Image
                  src={AMCLogo}
                  alt="Auburn Medical Center logo"
                  h="150"
                  w="200"
                />
              </Box>

              <Box>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;
                <Link to="/directory">Directory</Link>
                &nbsp;&nbsp;
                <Link to="#contactus">Contact Us</Link>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
