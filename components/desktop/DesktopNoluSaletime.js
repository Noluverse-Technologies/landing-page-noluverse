import { Flex, Image, Text } from "@chakra-ui/react";

export default function DesktopNoluSaletime() {
  return (
    <Flex direction="column" w="100%" p="5rem" id="timelinelg">
      <Flex
        p="5rem"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Sale Timeline
        </Text>
      </Flex>

      <Flex w="100%" alignItems="center" justifyContent="center">
        <Image
          p="5rem"
          alignSelf="center"
          w="100%"
          src="/stimeline.png"
          alt="saletimeline"
        />
      </Flex>
    </Flex>
  );
}
