import { Flex, Image, Text, Button } from "@chakra-ui/react";

export default function MilestoneNolu() {
  return (
    /*mother flex for all */

    <Flex direction="column" w="100vw" mt="3rem">
      {/*   flex for milestone heading and subheading  */}
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Milestone in Nolu
        </Text>
      </Flex>

      {/*  mother flex for charcter development*/}

      <Flex my="1rem" w="100%">
        <Flex ml="1.5rem" mt="1.5rem" w="10%">
          <Image w="1.3rem" h="1.3rem" src="m_righticon.png" alt="righticon" />
        </Flex>

        <Flex direction="column" w="90%" mt="1rem">
          <Text fontSize="lg" color="#091B27" fontWeight="bold">
            Character Development and Items
          </Text>

          <Text fontSize="lg" mt="0.5rem" color="#091B27">
            We’ll release all the exciting <br /> characters and digital assets
            within
            <br />
            the game.
          </Text>
        </Flex>
      </Flex>

      {/*  mother flex for game script*/}

      <Flex my="1rem" w="100%">
        <Flex ml="1.5rem" mt="1.5rem" w="10%">
          <Image w="1.3rem" h="1.3rem" src="m_righticon.png" alt="righticon" />
        </Flex>

        <Flex direction="column" w="90%" mt="1rem">
          <Text fontSize="lg" color="#091B27" fontWeight="bold">
            Game Script
          </Text>

          <Text fontSize="lg" mt="0.5rem" color="#091B27">
            Members will get to review the <br /> primary storyline of the game.
          </Text>
        </Flex>
      </Flex>

      {/*  mother flex for combat ai*/}

      <Flex my="1rem" w="100%">
        <Flex ml="1.5rem" mt="1.5rem" w="10%">
          <Image w="1.3rem" h="1.3rem" src="m_righticon.png" alt="righticon" />
        </Flex>

        <Flex direction="column" w="90%" mt="1rem">
          <Text fontSize="lg" color="#091B27" fontWeight="bold">
            Combat AI for Early Access
          </Text>

          <Text fontSize="lg" mt="0.5rem" color="#091B27">
            Players get to test out early combat <br /> AI.
          </Text>
        </Flex>
      </Flex>

      {/*   flex for milestone image  */}

      <Flex w="100%" my="1rem" alignItems="center" justifyContent="center">
        <Image w="80%" src="milestone.png" alt="milestone" />
      </Flex>

      {/*   flex for button */}

      <Flex alignItems="center" w="100%" justifyContent="center">
        <Button
          w="90%"
          borderRadius="0.5rem"
          ml="1.5rem"
          h="3.18rem"
          colorScheme="pink"
          variant="solid"
          bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
        >
          Learn More
        </Button>
      </Flex>

      {/*   mother flex for footer */}

      <Flex
        direction="column"
        h="30rem"
        backgroundImage="url('/footer.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100vw"
      >
        {/*    flex for nolu logo (child flex of footer) */}
        <Flex w="100%" mt="12rem">
          <Image src="logo.png" alt="logo.png" ml={5} />
        </Flex>

        {/*    flex for footer nav button (child flex of footer) */}
        <Flex w="100%" pl="1.5rem" direction="row" wrap="wrap" gap="6" mt="3rem">
          <Button variant="link" size="lg" color="#FFFFFF">
            Features
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Terms
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Timelines
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Roadmap
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Monetization
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Team
          </Button>
          <Button variant="link" size="lg" color="#FFFFFF">
            Milestones
          </Button>
        </Flex>

        {/*    flex for footer text (child flex of footer) */}
        <Flex w="100%" mt="3rem" pl="1.5rem">
          <Text size="xs" color="#FFFFFF">
            ©2022 Noluverse.com, All Rights Reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>

    /* mother flex end for all */
  );
}
