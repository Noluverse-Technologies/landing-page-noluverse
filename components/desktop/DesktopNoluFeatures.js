import { Flex, Image, Text } from "@chakra-ui/react";

export default function DesktopNoluFeatures() {
  return (
    /*      mother flex for all */

    <Flex
      id="featlg"
      direction="column"
      px={[0, 0, 0, "12rem", "7rem"]}
      py={[0, 0, 0, "2", , "6rem"]}
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <Image src="/feature-main.png" />
      </Flex>

      {/*  flex for feature heading and sub heading start */}

      {/* <Flex alignItems="center" justifyContent="center" direction="column">
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Features
        </Text>

        <Text fontSize="xl" mt="1rem" fontWeight="bold" color="#5F72DB">
          What We Are Building
        </Text>
      </Flex>
      {/*  flex for feature heading and sub heading end */}

      {/*   flex for DesktopNoluFeatures image  */}

       {/* <Flex
        px="17rem"
        pt="5rem"
        pb="1rem"
        alignSelf="center"
        position="relative"
      > */}
        {/* <Image src="/nolufeatures.png" alt="nolufeatures" /> */}

        {/*  mother flex for nolu+ start*/}
        {/* <Flex direction="column" position="absolute" left="-1rem">
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            Nolu+
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Get access to exclusive discounts
            <br />
            and perks that are only available
            <br />a to members. We’re always <br />
            releasing new benefits!
          </Text>
        </Flex> */}
        {/*  mother flex for nolu+ end*/}

        {/*  mother flex for nolUpay start*/}

        {/* <Flex
          direction="column"
          position="absolute"
          left="-1rem"
          bottom={[0, 0, 0, "6rem", , "8rem"]}
        >
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            NoluPay
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Seamlessly make purchases
            <br /> through your own personal
            <br /> payment gateway. It’s seamless,
            <br /> secure, and user-friendly.
          </Text>
        </Flex> */}

        {/*  mother flex for nolUpay end*/}

        {/* mother flex for NFT marketplace start */}

        {/* <Flex direction="column" position="absolute" right="-1rem">
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            NFT Marketplace
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Get your hands on some of the <br /> most unique and exciting NFT{" "}
            <br /> artwork in the space. We’re always <br /> adding more as the
            project <br /> matures.
          </Text>
        </Flex> */}

        {/* mother flex for NFT marketplace end */}

        {/*  mother flex for noluVerse start*/}

        {/* <Flex
          direction="column"
          position="absolute"
          right="-1rem"
          bottom={[0, 0, 0, "4rem", , "8rem"]}
        >
          <Text fontSize="lg" fontWeight="bold" color="#151855">
            Noluverse
          </Text>

          <Text mt="0.5" fontSize="md" color="#000000">
            Play the most exciting and <br /> realistic-looking game in the{" "}
            <br /> metaverse. This expansive open- <br />
            world VR MMORPG is going to <br /> change the way you view gaming.
          </Text>
        </Flex> */}

        {/*  mother flex for noluVerse end*/}
      {/* </Flex> */}

      {/*  mother flex for pixel start (not include in position relative and absolute)*/}

      <Flex direction="column" alignItems="center" justifyContent="center">
        {/* <Text fontSize="lg" fontWeight="bold" color="#151855">
          Pixel
        </Text> */}

        <Text mt="0.5" fontSize="md" color="#000000">
          Pixel holders earn exclusive
          <br />
          rewards from the Noluverse <br /> ecosystem.
        </Text>
      </Flex>

      {/*  mother flex for pixel end  (not include in position relative and absolute)*/}
    </Flex>
    /*  mother flex for all end  */
  );
}
