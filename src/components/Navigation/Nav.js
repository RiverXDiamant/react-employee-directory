// components
import React from "react";
import { Link } from "react-router-dom";

// Chakra components
import { Box, Flex, HStack } from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Box>
        <Flex justify="center">
          <HStack>
            <Box>
              <img
                src={process.env.PUBLIC_URL + "images/auburn-medical-logo.png"}
                alt="auburn medical logo"
                width={100}
                height={100}
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
    </>
  );
}
