import { Flex, Image, Text, Icon } from "@chakra-ui/react";

export default function BinanceSmartChain() {
  return (
    /*      mother flex for all */

    <Flex
      direction={["column", "column", "column", "column", "row"]}
      my="2rem"
      id="smartchainboth"
      pl={[0, 0, "10rem", "8rem", 0]}
    >
      {/*  mother flex for smart heading, para and comiboned supply,type, purchase start  */}

      <Flex
        direction="column"
        pl={[0, 0, 0, "4rem", "5rem"]}
        mt={[0, 0, 0, "5rem", "13rem"]}
        w={["100%", "100%", "80%", "80%", "50%"]}
      >
        {/*   flex for smart heading  */}

        <Flex
          alignItems={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
          justifyContent={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
          color={"black"}
          direction="column"
          w="100%"
        >
          <Text fontSize="3xl" fontWeight="bold" color="#151855">
            Binance Smart Chain
          </Text>
          <Image mt="1rem" src="headingicon.png" alt="headingicon" />
        </Flex>

        {/*   flex for smart paragraph  */}

        <Flex
          mt="2rem"
          w={["75%", "75%", "75%", "75%", "75%"]}
          alignSelf={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
        >
          <Text fontSize="md" color="#000000">
          We accept ETH, BTC, BNB, BUSD, USDT, and transactions will take place on the Binance Smart Chain. If you’re interested in getting in on the project early, this is your perfect opportunity.
          </Text>
        </Flex>

        {/*  mother  flex for token supply, token type, purchase  start*/}

        <Flex
          direction={["column", "column", "column", "column", "row"]}
          gap={[2, 2, 2, 6, 10]}
          mt={[0, 0, 0, "2rem", "2rem"]}
        >
          {/*   flex for token supply  */}

          <Flex
          alignItems={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "flex-start",
          }}
          justifyContent={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "flex-start",
          }}
            direction="column"
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
 
          alignItems={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
          justifyContent={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
            direction="column"
            mt="1.5rem"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
            BEP20
            </Text>

            <Text fontSize="sm" color="#000000">
              Token type
            </Text>
          </Flex>

          {/*   flex forpurchase method  */}

          <Flex
          alignItems={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
          justifyContent={{
            base: "center",
              md: "center",
            lg: "center",
            xl: "flex-start",
          }}
            direction="column"
            mt="1.5rem"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
            BTC, ETH, USDT, BNB, BUSD
            </Text>

            <Text fontSize="sm" color="#000000">
              Purchase methods accepted
            </Text>
          </Flex>
        </Flex>
        {/*  mother  flex for token supply, token type, purchase  end*/}
      </Flex>

      {/*  mother flex for smart heading, para and combined supply,type, purchase end  */}

      {/*   flex for terms image  */}

      <Flex
      w="100%"
        my="4rem"
       
        alignItems="center"
        justifyContent="center"
      >
        <Image   w={["90%", "60%", "60%", "50%", "45%"]} src="binancechain.png" alt="binancechain" />
      </Flex>
    </Flex>
    /*  mother flex for all end  */
  );
}
