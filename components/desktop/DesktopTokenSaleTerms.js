import { Flex, Image, Button, Text } from "@chakra-ui/react";

export default function DesktopTokenSaleTerms() {
  return (
    /*      mother flex for all start */

    <Flex w="100%" my="3rem">
      {/*   flex for Token Sale Terms image  */}

      <Flex w="50%" mt="1rem" px="5rem">
        <Image w="90%" src="tokensalesterm.png" alt="tokensalesterm" />
      </Flex>

      {/*  mother  flex for combined heading, paragraph, and crow salw and softcope  */}

      <Flex w="50%" direction="column" pt="6rem">
        {/*   flex for Token Sale Terms heading  */}

        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          direction="column"
        >
          <Text fontSize="3xl" fontWeight="bold" color="#151855">
            Token Sale Terms
          </Text>

          <Image mt="1rem" src="headingicon.png" alt="headingicon" />
        </Flex>

        {/*   flex for Token Sale Terms paragraph  */}

        <Flex w="70%" my="2rem">
          <Text fontSize="md" color="#000000">
            We’re aiming to raise $5,000,000 through the sale of our valuable
            native token for users interested in becoming part of the Nolu
            project.
          </Text>
        </Flex>

        {/*   mother flex for terms crowsale and softcat  */}

        <Flex direction="row" gap="8rem">
          {/*   flex for terms crowsale  */}

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mt="1.5rem"
          >
            <Text fontSize="4xl" fontWeight="bold" color="#4169E1">
              $10,000,000
            </Text>

            <Text fontSize="sm" color="#000000">
              Target on crowdsale
            </Text>
          </Flex>

          {/*   flex for terms softcap  */}

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mt="1.5rem"
          >
            <Text fontSize="4xl" fontWeight="bold" color="#4169E1">
              $5,000,000
            </Text>

            <Text fontSize="sm" color="#000000">
              Soft cap
            </Text>
          </Flex>
        </Flex>

        {/*   mother flex for terms crowsale and softcat  end*/}
      </Flex>
    </Flex>

    /*      mother flex for all end */
  );
}
