import { Flex, Image, Button, Text } from "@chakra-ui/react";

export default function DesktopBinanceSmartChain() {
  return (
    /*      mother flex for all start */

    <Flex
      w="100%"
      mt="3rem"
      px={["5rem", "5rem", "5rem", "12rem", "5.5rem"]}
      id="binancesm"
    >
      {/*  mother  flex for combined heading, paragraph, and (token supply, BEP20 and Btc...)  */}

      <Flex w="50%" direction="column" pt="6rem">
        {/*   flex for  binance heading  */}

        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="column"
        >
          <Text fontSize="3xl" fontWeight="bold" color="#151855">
            Binance Smart Chain
          </Text>

          <Image mt="1rem" src="headingicon.png" alt="headingicon" />
        </Flex>

        {/*   flex for binance paragraph  */}

        <Flex w="70%" mt="2rem">
          <Text fontSize="md" color="#000000">
            We accept ETH, BTC, BNB, BUSD, USDT, and transactions will take
            place on the Binance Smart Chain. If you’re interested in getting in
            on the project early, this is your perfect opportunity.
          </Text>
        </Flex>

        {/*   mother flex for (token supply, BEP20 and Btc...)  */}

        <Flex direction="row" gap="3rem">
          {/*   flex for terms token supply  */}

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mt="1.5rem"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
              100,000,000 Nolu
            </Text>

            <Text fontSize="sm" color="#000000">
              Total token supply
            </Text>
          </Flex>

          {/*   flex for terms Bep20 */}

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mt="1.5rem"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#4169E1">
              BEP20
            </Text>

            <Text fontSize="sm" color="#000000">
              Token type
            </Text>
          </Flex>

          {/*   flex for terms BTC,Eth....  */}

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
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
      </Flex>
      {/*   mother flex for(token supply, BEP20 and Btc...)  end*/}

      {/*   flex binance image  */}

      <Flex w="50%" mt="1rem" px="2rem">
        <Image w="90%" src="binancechain.png" alt="lg binancechain" />
      </Flex>
    </Flex>

    /*      mother flex for all end */
  );
}
