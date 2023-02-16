//components

import { Heading, Box, Flex, Text } from "@chakra-ui/react";

export default function RightSectionPrivacy() {
  return (
    <Box bg="blue.700" h="300" w="sm" overflow="hidden">
      <Flex justify="center" mt="2">
        <Heading fontWeight="bold" fontSize="xl" color="white">
          Notice of E-Mail Scams
        </Heading>
      </Flex>
      <Flex justify="center">
        <Box as="hr" bg="blue.200" h="0.5" w="10" mb="2" mt="4"></Box>
      </Flex>

      <Box h="200" mt="1" mb="-3">
        <Text fontSize="md" fontWeight="light" color="white" ml="2">
          Auburn Medical Center (AMC) is committed to protecting the security
          and privacy of our patient's information. Please be aware of any
          suspicious emails or communications from people claiming to be
          representatives of Auburn Medical Center.
        </Text>

        <Box bg="red.500" border="none">
          <Text fontSize="md" fontWeight="light" color="white" ml="2">
            Do not disclose financial or personal details to anyone you do not
            know or continue to engage in communications you believe may be
            fraudulent. If you believe you may have been targeted in this scam,
            contact your local law enforcement.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
