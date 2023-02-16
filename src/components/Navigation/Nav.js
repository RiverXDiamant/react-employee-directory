// components
import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
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
              <NavHashLink
                to="/#care-options"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "end" })
                }
              >
                Care and Treatment |
              </NavHashLink>
              &nbsp;&nbsp;
              <Link to="/directory">Employee Directory |</Link>
              &nbsp;&nbsp;
              <NavHashLink
                to="/#info"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Patient and Visitor Info |
              </NavHashLink>
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
