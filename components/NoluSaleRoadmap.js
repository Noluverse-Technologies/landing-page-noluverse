import { Flex, Image, Text, Heading, Button, Icon } from "@chakra-ui/react";
export default function NoluSaleRoadmap() {
  return (
    /*      mother flex for all */

    <Flex direction="column" w="100vw" my="3rem">
      {/*   flex for roadmap heading  */}
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Sale Roadmap
        </Text>
      </Flex>

      {/*   flex for roadmap sub heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        px="2.2rem"
        direction="column"
        w="100%"
      >
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
          Explore development
        </Text>
      </Flex>

      {/*   flex for mother phase 1  */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 1  heading part */}

        <Flex
          backgroundColor="#3859C2"
          h="5.87rem"
          ml="1.2rem"
          mt="1rem"
          borderRadius={"20px 20px 0px 0px"}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 1
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Game Universe
          </Text>
        </Flex>

        {/*   flex for phase 1  description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          ml="1.2rem"
          w="95%"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>1</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Blade of Carnage</strong> <br />
              Early Accesst | PC MMORPG <br />
              Main Game
              <Image w="5%" src="maingame.png" alt="maingame" />
              XR MMORPG
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>2</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Expansion: Sequel of Boc</strong>
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>3</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Sequel 2 : BoC</strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 2  */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 2  heading part */}

        <Flex
          backgroundColor="#4F68D1"
          h="5.87rem"
          ml="1.2rem"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 2
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Entertainment and Events Universe
          </Text>
        </Flex>

        {/*   flex for phase 2  description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          w="95%"
          ml="1.2rem"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>4</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Visual Concerts, Music Festivals</strong>
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>5</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Tiktok and Instagram</strong> <br />
              User generated content
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>6</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Open World MMORPG</strong> <br />
              vr mmorpg
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 2 (2nd) (continued) */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 2 (2nd)  heading part */}

        <Flex
          backgroundColor=" #5F72DB"
          h="5.87rem"
          ml="1.2rem"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 2
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Continued
          </Text>
        </Flex>

        {/*   flex for phase 2 (2nd)  description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          ml="1.2rem"
          w="95%"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>7</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>NTF Museum</strong> <br /> Showcase NTFs | Louvre
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>8</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Fantasy sport events</strong> <br />
              Basketball and Football | <br />
              Soccer
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>9</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Music and Film Festivals</strong> <br />
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 3 */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 3  heading part */}

        <Flex
          backgroundColor="#6E7CE5"
          h="5.87rem"
          ml="1.2rem"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 3
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Financial Universe
          </Text>
        </Flex>

        {/*   flex for phase 3 description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          ml="1.2rem"
          w="95%"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>10</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Marketplace items</strong> <br /> Skins and NTFs
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>11</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Auction House</strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 4 */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 4  heading part */}

        <Flex
          backgroundColor="#7E87EF"
          h="5.87rem"
          ml="1.2rem"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 4
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Gambling Planet
          </Text>
        </Flex>

        {/*   flex for phase 4 description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          ml="1.2rem"
          w="95%"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>12</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Casino House</strong>
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>13</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Sci-Fi Car Race</strong>
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>14</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Dragon Racing</strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 5 */}

      <Flex w="100%" direction="column">
        {/*   flex for phase 5  heading part */}

        <Flex
          backgroundColor="#9797FF"
          h="5.87rem"
          ml="1.2rem"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="lg" color="#FFFFFF">
            Phase 5
          </Text>
          <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
            Architecture Universe
          </Text>
        </Flex>

        {/*   flex for phase 5 description part */}

        <Flex
          backgroundColor="#FAFAFF"
          border="1px solid #EDF2F7"
          py="1.5rem"
          ml="1.2rem"
          w="95%"
          direction="column"
        >
          <Flex w="100%" px="2rem" mt="1rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>15</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Marketplace items</strong> <br /> Skins and NTFs
            </Text>
          </Flex>

          <Flex w="100%" px="2rem" mt="3.5rem">
            <Text w="20%" fontSize="lg" color="#000000">
              <strong>16</strong>
            </Text>

            <Text w="80%" fontSize="lg" color="#000000">
              <strong>Auction House</strong>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*   flex for mother phase 5  (architecture universe) */}

      <Flex w="100%" direction="column">
        <Flex
          backgroundColor="#9797FF"
          h="5.87rem"
          ml="1.2rem"
          borderRadius={"0px 0px 20px 20px"}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="md" color="#FFFFFF">
            *Phase 5
          </Text>
          <Text mt="0.5rem" fontSize="md" color="#FFFFFF">
            Migrate to own NOLu Blockchain Protocol
          </Text>
        </Flex>
      </Flex>

      {/*   flex for button */}

      <Flex alignItems="center" w="100%" justifyContent="center">
        <Button
          w="90%"
          borderRadius="0.5rem"
          mt="1rem"
          ml="1.5rem"
          h="3.18rem"
          colorScheme="pink"
          variant="solid"
          bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
        >
          Learn More
        </Button>
      </Flex>
    </Flex>
    /* mother flex for all  end  */
  );
}
