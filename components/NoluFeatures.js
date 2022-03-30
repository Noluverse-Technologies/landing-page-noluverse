import { Flex, Image, Text } from "@chakra-ui/react";

export default function NoluFeatures() {
  return (
    /*      mother flex for all */
    // pl={[0, 0, "10rem", "17rem", 0]}
    <Flex direction="column" id="featsm">
      {/*  flex for feature heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        color={"black"}
        direction="column"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Features
        </Text>

        <Text fontSize="xl" mt="1rem" fontWeight="bold" color="#5F72DB">
          What We Are Building
        </Text>
      </Flex>

      {/*  mother flex for nolu+*/}

      <Flex my="1rem" w="100%" pl={[0, "6rem", "10rem", "17rem", 0]} >
        <Flex ml="1.5rem" mt="1.5rem" w="30%">
          <Image w="3.50rem" h="3.50rem" src="nolu+.png" alt="nolu+" />
        </Flex>

        <Flex direction="column" mt="1rem">
          <Text fontSize="lg" w="70%" fontWeight="bold" color="#151855">
            Nolu+
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Get access to exclusive discounts
            <br />
            and perks that are only available
            <br />a to members. We’re always <br />
            releasing new benefits!
          </Text>
        </Flex>
      </Flex>

      {/*  mother flex for nolUpay*/}

      <Flex my="1rem" w="100%"  pl={[0, "6rem", "10rem", "17rem", 0]}>
        <Flex ml="1.5rem" mt="1.5rem" w="30%">
          <Image w="3.50rem" h="3.50rem" src="noluPay.png" alt="noluPay" />
        </Flex>

        <Flex direction="column" w="70%" mt="1rem" >
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            NoluPay
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Seamlessly make purchases
            <br /> through your own personal
            <br /> payment gateway. It’s seamless,
            <br /> secure, and user-friendly.
          </Text>
        </Flex>
      </Flex>

      {/*  mother flex for pixel*/}

      <Flex my="1rem" w="100%" pl={[0, "6rem", "10rem", "17rem", 0]} >
        <Flex ml="1.5rem" mt="1.5rem" w="30%">
          <Image w="3.50rem" h="3.50rem" src="pixel.png" alt="pixel" />
        </Flex>

        <Flex direction="column" w="70%" mt="1rem">
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            Pixel
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Pixel holders earn exclusive
            <br />
            rewards from the Noluverse <br /> ecosystem.
          </Text>
        </Flex>
      </Flex>

      {/*  mother flex for noluVerse*/}

      <Flex my="1rem" w="100%" pl={[0, "6rem", "10rem", "17rem", 0]}>
        <Flex ml="1.5rem" mt="1.5rem" w="30%">
          <Image w="3.50rem" h="3.50rem" src="noluVerse.png" alt="noluVerse" />
        </Flex>

        <Flex direction="column" w="70%" mt="1rem">
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            Noluverse
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Play the most exciting and <br /> realistic-looking game in the{" "}
            <br /> metaverse. This expansive open- <br />
            world VR MMORPG is going to <br /> change the way you view gaming.
          </Text>
        </Flex>
      </Flex>

      {/*  NFT marketplace */}

      <Flex my="1rem" w="100%" pl={[0, "6rem", "10rem", "17rem", 0]}>
        <Flex ml="1.5rem" mt="1.5rem" w="30%">
          <Image w="3.50rem" h="3.50rem" src="nft.png" alt="nft" />
        </Flex>

        <Flex direction="column" w="70%" mt="1rem">
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            NFT Marketplace
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Get your hands on some of the <br /> most unique and exciting NFT{" "}
            <br /> artwork in the space. We’re always <br /> adding more as the
            project <br /> matures.
          </Text>
        </Flex>
      </Flex>
    </Flex>
    /*  mother flex for all end  */
  );
}
