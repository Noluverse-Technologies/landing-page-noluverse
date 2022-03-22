import { Flex, Image, Button, Text } from "@chakra-ui/react";

export default function DesktopNoluSaleRoadmap() {
  return (
    /*      mother flex for all */

    <Flex direction="column" my="3rem">
      {/*   flex for roadmap heading  */}
      <Flex alignItems="center" justifyContent="center" direction="column">
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
      >
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
          Explore development
        </Text>
      </Flex>

      {/*  mother flex for  (phase 1 - phase 6) start */}

      <Flex direction="row" p="4rem" w="100%">
        {/*   flex for mother phase 1  */}

        <Flex direction="column" w="16.66%">
          {/*   flex for phase 1  heading part */}

          <Flex
            backgroundColor="#3859C2"
            h="7rem"
            ml="1.2rem"
            borderRadius={"20px 0px 0px 0px"}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 1
            </Text>
            <Text mt="0.5rem" fontSize="sm" fontWeight="bold" color="#FFFFFF">
              Game Universe
            </Text>
          </Flex>

          {/*   flex for phase 1  description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            py="1.5rem"
            h="30rem"
            ml="1.2rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>1</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Blade of Carnage</strong> <br />
                Early Accesst | PC MMORPG <br />
                Main Game
                <Image w="5%" src="maingame.png" alt="maingame" />
                XR MMORPG
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>2</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Expansion: Sequel of Boc</strong>
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>3</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Sequel 2 : BoC</strong>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   flex for mother phase 1 end */}

        {/*   flex for mother phase 2  */}

        <Flex direction="column" w="16.66%">
          {/*   flex for phase 2  heading part */}

          <Flex
            backgroundColor="#4F68D1"
            h="7rem"
            ml="0.5rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 2
            </Text>
            <Text
              mt="0.5rem"
              pl="2rem"
              fontSize="sm"
              fontWeight="bold"
              color="#FFFFFF"
            >
              Entertainment and Events Universe
            </Text>
          </Flex>

          {/*   flex for phase 2  description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            h="30rem"
            py="1.5rem"
            ml="0.5rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>4</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Visual Concerts, Music Festivals</strong>
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>5</strong>
              </Text>

              <Text direction="column" fontSize="lg" color="#000000">
                <strong>Tiktok and Instagram</strong> <br />
                User generated content
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>6</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Open World MMORPG</strong> <br />
                vr mmorpg
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   flex for mother phase 2 end */}

        {/*   flex for mother phase 2 (2nd) (continued) start*/}

        <Flex w="16.66%" direction="column">
          {/*   flex for phase 2 (2nd)  heading part */}

          <Flex
            backgroundColor=" #5F72DB"
            h="7rem"
            ml="0.5rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 2
            </Text>
            <Text mt="0.5rem" fontSize="sm" fontWeight="bold" color="#FFFFFF">
              Continued
            </Text>
          </Flex>

          {/*   flex for phase 2 (2nd)  description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            h="30rem"
            py="1.5rem"
            ml="0.5rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>7</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>NTF Museum</strong> <br /> Showcase NTFs | Louvre
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>8</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Fantasy sport events</strong> <br />
                Basketball and Football | <br />
                Soccer
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3rem">
              <Text fontSize="lg" color="#000000">
                <strong>9</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Music and Film Festivals</strong> <br />
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   flex for mother phase 2 (2nd) (continued) end*/}

        {/*   flex for mother phase 3 start */}
        <Flex w="16.66%" direction="column">
          {/*   flex for phase 3  heading part */}

          <Flex
            backgroundColor="#6E7CE5"
            h="7rem"
            ml="0.5rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 3
            </Text>
            <Text mt="0.5rem" fontSize="sm" fontWeight="bold" color="#FFFFFF">
              Financial Universe
            </Text>
          </Flex>

          {/*   flex for phase 3 description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            h="30rem"
            py="1.5rem"
            ml="0.5rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>10</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Marketplace items</strong> <br /> Skins and NTFs
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>11</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Auction House</strong>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   flex for mother phase 3 end */}

        {/*   flex for mother phase 4 start */}

        <Flex w="16.66%" direction="column">
          {/*   flex for phase 4  heading part */}

          <Flex
            backgroundColor="#7E87EF"
            h="7rem"
            ml="0.5rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 4
            </Text>
            <Text mt="0.5rem" fontSize="sm" fontWeight="bold" color="#FFFFFF">
              Gambling Planet
            </Text>
          </Flex>

          {/*   flex for phase 4 description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            h="30rem"
            py="1.5rem"
            ml="0.5rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>12</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Casino House</strong>
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>13</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Sci-Fi Car Race</strong>
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>14</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Dragon Racing</strong>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/*   flex for mother phase 4 end */}

        {/*   flex for mother phase 5 start */}

        <Flex w="16.66%" direction="column">
          {/*   flex for phase 5  heading part */}

          <Flex
            backgroundColor="#9797FF"
            h="7rem"
            ml="0.5rem"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Phase 5
            </Text>
            <Text mt="0.5rem" fontSize="sm" fontWeight="bold" color="#FFFFFF">
              Architecture Universe
            </Text>
          </Flex>

          {/*   flex for phase 5 description part */}

          <Flex
            backgroundColor="#FAFAFF"
            border="1px solid #EDF2F7"
            h="22.28rem"
            py="1.5rem"
            ml="0.5rem"
            direction="column"
          >
            <Flex direction="column" px="2rem" mt="1rem">
              <Text fontSize="lg" color="#000000">
                <strong>15</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Marketplace items</strong> <br /> Skins and NTFs
              </Text>
            </Flex>

            <Flex direction="column" px="2rem" mt="3.5rem">
              <Text fontSize="lg" color="#000000">
                <strong>16</strong>
              </Text>

              <Text fontSize="lg" color="#000000">
                <strong>Auction House</strong>
              </Text>
            </Flex>
          </Flex>

          {/*   flex for mother phase 5  (architecture universe) */}

          <Flex
            backgroundColor="#9797FF"
            h="7.12rem"
            ml="0.5rem"
            borderRadius={"0px 0px 20px 0px"}
            direction="column"
          >
            <Text pl="1rem" pt="1rem" fontSize="md" color="#FFFFFF">
              *Phase 5
            </Text>
            <Text pl="1rem" fontSize="md" color="#FFFFFF">
              Migrate to own NOLu Blockchain Protocol
            </Text>
          </Flex>
        </Flex>

        {/*   flex for mother phase 5 end */}
      </Flex>
      {/*  mother flex for  (phase 1 - phase 6) end */}

      {/*   flex for button */}

      <Flex alignItems="center" w="100%" justifyContent="center">
        <Button
          w="15%"
          borderRadius="0.5rem"
          mt="3rem"
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
