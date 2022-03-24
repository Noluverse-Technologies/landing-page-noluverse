import { Flex, Image, Text, Show, Hide } from "@chakra-ui/react";

export default function TokenSaleTerms() {
  return (
    /*      mother flex for all */

    <Flex direction="column" my="3rem" id="termssm">
      {/*   flex for terms heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        color={"black"}
        direction="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Token Sale Terms
        </Text>

        <Image mt="1rem" src="headingicon.png" alt="headingicon" />
      </Flex>

      {/*   flex for terms paragraph  */}

      <Flex my="1rem" w="100%" alignItems="center" justifyContent="center">
        <Text fontSize="md" color="#000000">


        We’re aiming to raise 1,000 BNB through <br/> the sale of our valuable native token for <br/> users interested in becoming part of the <br/> Nolu project.

        
        </Text>
      </Flex>

      {/*   flex for terms crowsale  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="100%"
        mt="1.5rem"
      >
        <Text fontSize="4xl" fontWeight="bold" color="#4169E1">
        1,000 BNB
        </Text>

        <Text fontSize="sm" color="#000000">
        Hard cap 
        </Text>
      </Flex>

      {/*   flex for terms softcap  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="100%"
        mt="1.5rem"
      >
        <Text fontSize="4xl" fontWeight="bold" color="#4169E1">
        500 BNB
        </Text>

        <Text fontSize="sm" color="#000000">
          Soft cap
        </Text>
      </Flex>

      {/*   flex for terms image  */}

      <Flex w="100%" mt="2rem" alignItems="center" justifyContent="center">
        <Image w="90%" src="tokensalesterm.jpg" alt="tokensalesterm" />
      </Flex>
    </Flex>
  );
}
