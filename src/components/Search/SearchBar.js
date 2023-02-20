// components
import { Box, Flex, Input, Button, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <Box>
      <Flex justify="center">
        <HStack>
          <Box as="form">
            <Input
              type="text"
              color="blue.700"
              name="search-employee"
              variant="filled"
              placeholder="Find a Provider"
              _placeholder={{ opacity: 1, color: "inherit" }}
              size="lg"
            />
          </Box>
          <Box bg="blue.400">
            <Button
              bg="blue.700"
              color="white"
              _hover={{ bg: "blue.600", fontWeight: "bold" }}
              type="submit"
              value="submit"
            >
              Search &nbsp;
              <FaSearch />
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
