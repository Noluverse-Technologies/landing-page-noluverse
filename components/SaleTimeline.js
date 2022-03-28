import { Flex, Image, Text } from "@chakra-ui/react";

export default function SaleTimeline() {
  return (
    <Flex direction="column" w="100%" id="timelinesm">
      <Flex
      
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Sale Timeline
        </Text>
      </Flex>

      <Flex     p="3rem" alignItems="center" justifyContent="center">
        <Image
   
          alignSelf="center"
          w={["100%", "100%", "50%", "40%", "50%"]}
          src="/stimelinesm.png"
          alt="saletimelinesm"
        />
      </Flex>
    </Flex>
  );
}
