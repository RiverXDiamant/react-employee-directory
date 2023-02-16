// components
import React from "react";
import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";
import AMCFooterLogo from "../../img/auburn-medical-footer-logo.png";

// import { LoremIpsum } from "react-lorem-ipsum";

// Chakra components
import { Box, Flex, Stack, Text, Image, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" h="500">
      <Flex justify="center">
        <Box h="250" w="200" mr="5" borderRight="1px">
          <Image
            src={AMCFooterLogo}
            alt="Auburn Medical Center Logo"
            h="300"
            w="200"
            mt="-8"
          />

          <Flex justify="center" mt="-20">
            <Link to="/">
              <Button
                border="1px"
                colorScheme="transparent"
                color="blue.600"
                _hover={{ background: "blue.600", color: "white" }}
              >
                About Us
              </Button>
            </Link>
          </Flex>
        </Box>

        <Box bg="gray.300" h="250" w="300" borderRight="1px">
          <Stack id="info">
            <Text as="h3">AMC Health</Text>
            <Link to="/">
              <Text _hover={{ color: "blue.600" }}>Place holder</Text>
            </Link>
          </Stack>
        </Box>
      </Flex>

      <FooterNav />
    </Box>
  );
}
