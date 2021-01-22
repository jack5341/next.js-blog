import {
  Box,
  Textarea,
  Kbd,
  Text,
  Flex,
  Button,
  Input
} from "@chakra-ui/react";

// import "./sharepost.style.css";

export default function SharedPost() {
  return (
    <Box p="3" border="3px" borderColor="gray.200" mt="5" boxShadow="2xl">
      <Kbd>jack5341</Kbd>
      <Text as="samp" pl="3">
        share a post !
      </Text>
      <Textarea
        variant="filled"
        resize="none"
        mt="3"
        placeholder="What do you think ?"
      />
      <Flex mt="2">
        <Box flex="1" mr="2">
          <Input variant="filled" height="50px" type="file" name="user[file]" />
        </Box>
        <Box flex="1" bg="red">
          <Button h="100%" w="100%" colorScheme="blue">
            Button
          </Button>{" "}
        </Box>
      </Flex>
    </Box>
  );
}
