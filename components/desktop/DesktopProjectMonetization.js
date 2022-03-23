import { Flex, Image, Button, Text } from "@chakra-ui/react";

export default function DesktopProjectMonetization() {
  return (
    /*mother flex for all */

    <Flex direction="column" my="5rem" px="5rem">
      {/*   flex for project heading  */}
      <Flex direction="column" px="2.5rem">
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Project Monetization
        </Text>
      </Flex>

      {/*   flex for project sub heading  */}

      <Flex direction="column" px="2.5rem">
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
          How Noluverse Makes Money
        </Text>
      </Flex>

      {/*   mother flex for  combined (1-6) and image start */}

      <Flex w="100%" px="1rem">
        {/*   mother flex for (1-3)  start */}
        <Flex w="30%" direction="column" pt="1rem">
          {/* 1 */}

          <Flex w="100%" pl="1.5rem" mt="1rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>01</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                NoluPay
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                Users pay a small transaction fee to send money.
              </Text>
            </Flex>
          </Flex>

          {/* 2 */}

          <Flex w="100%" pl="1.5rem" mt="1.5rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>02</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                Nolu+
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                Subscribers pay monthly fees.
              </Text>
            </Flex>
          </Flex>

          {/* 3 */}

          <Flex w="100%" pl="1.5rem" mt="1.5rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>03</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                Pixel
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                We earn transaction fees through the facilitation of Pixels.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   mother flex for (1-3)  end */}

        {/*   mother flex for (4-6) start */}

        <Flex w="30%" direction="column" pt="1rem">
          {/* 4 */}

          <Flex w="100%" pl="1.5rem" mt="1rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>04</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                Ad revenue
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                Brands pay to advertise on our site to gain exposure.
              </Text>
            </Flex>
          </Flex>

          {/* 5 */}

          <Flex w="100%" pl="1.5rem" mt="1.5rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>05</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                Nolu Merchandise
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                We sell in-game digital assets and physical merchandise.
              </Text>
            </Flex>
          </Flex>

          {/* 6 */}

          <Flex w="100%" pl="1.5rem" mt="1.5rem">
            <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
              <Text>06</Text>
            </Flex>

            <Flex w="90%" direction="column">
              <Text color="#2A408E" fontSize="xl" fontWeight="bold">
                Nolu Blockchain
              </Text>
              <Text color="#000000" fontSize="lg" mt="0.5rem">
                Our blockchain earns through fees, partnerships, and selling
                services.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   mother flex for (4-6)  end */}

        <Flex w="40%" pl="5rem">
          <Image w="90%" src="monetization.jpg" alt="monetization" />
        </Flex>
      </Flex>

      {/*   mother flex for  combined (1-6) and image end */}
    </Flex>
    /*  mother flex for all end  */
  );
}
