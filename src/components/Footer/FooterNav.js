// components
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FaArrowCircleUp } from "react-icons/fa";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function FooterNav() {
  return (
    <Box as="nav" h="100" mt="20">
      <Flex justify="center">
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Accessibility
          </Text>
        </Link>
        &nbsp; | &nbsp;
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Non-Discrimination
          </Text>
        </Link>
        &nbsp; | &nbsp;
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Compliance
          </Text>
        </Link>
        &nbsp; | &nbsp;
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Employees
          </Text>
        </Link>
        &nbsp; | &nbsp;
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Careers
          </Text>
        </Link>
        &nbsp; | &nbsp;
        <Link to="/">
          <Text _hover={{ color: "blue.600", fontWeight: "bold" }}>
            Board Portal
          </Text>
        </Link>
      </Flex>

      <Box mt="2">
        <Flex justify="center">
          <Text fontSize="sm" color="gray.500">
            &copy; Auburn Medical Center 2023 - All Rights Reserved
          </Text>
        </Flex>
      </Box>

      <Box>
        <Flex justify="end">
          <NavHashLink
            to="#top"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth" }).fadeIn("200")
            }
          >
            <Text fontSize="2xl">
              <FaArrowCircleUp />
            </Text>
          </NavHashLink>
        </Flex>
      </Box>
    </Box>
  );
}
