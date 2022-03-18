import { Flex, Image, Text, Icon } from "@chakra-ui/react";

export default function BinanceSmartChain() {
  return (
    /*      mother flex for all */

    <Flex flexDir="column" w="100vw" my="3rem">
      {/*   flex for smart heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        color={"black"}
        flexDir="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Binance Smart Chain
        </Text>
        <Image mt="1rem"  src="headingicon.png" alt="headingicon" />
      </Flex>

      {/*   flex for smart paragraph  */}

      <Flex my="1rem" w="100%" alignItems="center" justifyContent="center">
        <Text fontSize="md" color="#000000">
          We accept ETH, BTC, BNB, USDT, and <br /> transactions will take place
          on the <br /> Binance Smart Chain. If you’re interested <br /> in
          getting in on the project early, this is <br /> your perfect
          opportunity.
        </Text>
      </Flex>

      {/*   flex for token supply  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        w="100%"
        mt="1.5rem"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
          100,000,000 Nolu
        </Text>

        <Text fontSize="sm" color="#000000">
          Total token supply
        </Text>
      </Flex>

      {/*   flex for token type  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        w="100%"
        mt="1.5rem"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
          ERC20
        </Text>

        <Text fontSize="sm" color="#000000">
          Token type
        </Text>
      </Flex>

      {/*   flex forpurchase method  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        w="100%"
        mt="1.5rem"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
          BTC, ETH, USDT, BNB, BUSD
        </Text>

        <Text fontSize="sm" color="#000000">
          Purchase methods accepted
        </Text>
      </Flex>

      {/*   flex for terms image  */}

      <Flex w="100%" my="2rem" alignItems="center" justifyContent="center">
        <Image w="50%" src="smartchain.png" alt="smartchain" />
      </Flex>
    </Flex>
    /*  mother flex for all end  */
  );
}
