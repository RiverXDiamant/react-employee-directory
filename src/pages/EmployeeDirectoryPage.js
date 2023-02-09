// components
import { Link } from "react-router-dom";

// Chakra components
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
// import EmployeePage from "../pages/EmployeePage";

export default function EmployeeDirectoryPage() {
  return (
    <Box as="section" bg="gray.100" h="500">
      <Flex justify="center">
        <Stack>
          <Text>Employee Directory Page Component</Text>
          <Link to="/employeepage/:directory">
            <Button bg="blue.700" color="white">
              Employee Page Test
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
