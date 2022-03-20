import { Flex, Image, Text } from "@chakra-ui/react";

export default function MeetNoluTeam() {
  return (
    /*mother flex for all */

    <Flex flexDir="column" w="100vw" my="3rem">
      {/*   flex for team heading  */}
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Meet the Nolu Team
        </Text>
      </Flex>

      {/*   flex for team sub heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        px="2.2rem"
        flexDir="column"
        w="100%"
      >
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
          The Leaders Behind the Project
        </Text>
      </Flex>

      {/*   mother flex for all cards  */}

      <Flex flexDir="column">
        {/*    flex for 1st card  */}

        <Flex flexDir="column"></Flex>
        {/*    flex for 1st card end  */}
      </Flex>

      {/*   end  */}
    </Flex>
  );
}
