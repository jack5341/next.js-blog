import { Box, Flex, Button, Input, Center, Square } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w="100%"
      boxShadow="base"
      border="1px"
      borderColor="gray.200"
      color="black"
    >
      <Flex color="white">
        <Square size="100px">
          <Button color="black" fontSize="1.5em" ml="4" variant="link">
            Next.js
          </Button>{" "}
        </Square>
        <Center flex="1">
          <Input
            ml="5"
            size="lg"
            color="black"
            variant="filled"
            placeholder="Browse through posts !"
          />
        </Center>
        <Center w="250px">
          <Box fontSize="1.5em" color="black">
            <Button m="2" variant="ghost">
              Login
            </Button>
            <Button m="2" variant="ghost">
              Register
            </Button>
          </Box>{" "}
        </Center>
      </Flex>
    </Box>
  );
}
