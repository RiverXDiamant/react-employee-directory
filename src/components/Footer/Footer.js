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
    <Box as="footer" h="500" mr="10">
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

        <Box id="amc-health" borderRight="1px" w="250px" mr="5">
          <Flex justify="center">
            <Stack id="info">
              <Text as="h3" fontSize="xl" fontWeight="bold" color="blue.600">
                AMC Health
              </Text>
              <Flex justify="center">
                <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2"></Box>
              </Flex>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Our Mission</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>News</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Blog</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>
                  Clinical Research and Trials
                </Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Referring Physicians</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>
                  Request Medical Records
                </Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Volunteer</Text>
              </Link>
            </Stack>
          </Flex>
        </Box>

        <Box id="resources" borderRight="1px" w="250px" mr="5">
          <Flex justify="center">
            <Stack id="info">
              <Text
                as="h3"
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                color="blue.600"
              >
                Resources
              </Text>
              <Flex justify="center">
                <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2"></Box>
              </Flex>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Visitor Assistance</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Education & Training</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Health Library</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Financial Assistance</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Smoking Cessation</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Fitness Centers</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Senior Health</Text>
              </Link>
            </Stack>
          </Flex>
        </Box>

        <Box id="policies" borderRight="1px" w="250px" mr="5">
          <Flex justify="center">
            <Stack id="info">
              <Text
                as="h3"
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                color="blue.600"
              >
                Policies
              </Text>
              <Flex justify="center">
                <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2"></Box>
              </Flex>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Patients Rights</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Price Transparency</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Code Of Conduct</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Research and Trials</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Compliance Manual</Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>
                  Non-Discrimination Statement
                </Text>
              </Link>
              <Link to="/">
                <Text _hover={{ color: "blue.600" }}>Privacy Statement</Text>
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>

      <FooterNav />
    </Box>
  );
}
