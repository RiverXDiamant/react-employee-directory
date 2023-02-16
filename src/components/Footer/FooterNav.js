// components
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function FooterNav() {
  return (
    <Box as="nav" bg="blue.100" mt="20">
      <Flex justify="center">
        <Link to="/">Accessibility |</Link>
        &nbsp;&nbsp;
        <Link to="/">Non-Discrimination |</Link>
        &nbsp;&nbsp;
        <Link to="/">Compliance |</Link>
        &nbsp;&nbsp;
        <Link to="/">Employees |</Link>
        &nbsp;&nbsp;
        <Link to="/">Careers |</Link>
        &nbsp;&nbsp;
        <Link to="/">Board Portal</Link>
      </Flex>

      <Box mt="2">
        <Flex justify="center">
          <Text fontSize="sm" color="gray.500">
            &copy; Auburn Medical Center 2023 - All Rights Reserved
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
