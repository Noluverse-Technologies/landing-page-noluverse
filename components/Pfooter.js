import {
    Flex,
    Image,
    Text,
    SimpleGrid,
    Box,
    Link,
    Button,
  } from "@chakra-ui/react";
  
  export default function Pfooter() {
    return (
      <Flex
      h={["40rem", "40rem", "37rem", "26.8125rem", "26.8125rem"]}
        backgroundImage="url('/footerdesktop.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100vw"
        direction="row"
        justifyContent="space-between"
      >
      <Flex
      direction="column"
      pt={["25em", "26rem", "26rem", "18rem", "18rem"]}
      pl={["5rem", "5rem", "5rem", "8rem", "8rem"]}
    >
      <Flex>
        <Image w="3.175rem" h="3.87rem" src="logo.png" alt="logo.png" />
      </Flex>
      <Flex pt="1rem">
        <Text size="xs" color="#FFFFFF">
          ©2022 Noluverse.com, All Rights Reserved.
        </Text>
      </Flex>
    </Flex>


    <Flex
    direction="row"
    wrap="wrap"
    gap="8"
    pt={["0", "0", "0", "18rem", "18rem"]}
    pl={["5rem", "5rem", "5rem", "0", "0"]}
  >
    <Link href="#featsm">
      <Button variant="link" color="#FFFFFF">
        Features
      </Button>
    </Link>

    <Link href="#termssm">
      <Button variant="link" color="#FFFFFF">
        Terms
      </Button>
    </Link>
    <Link href="#timelinesm">
      <Button variant="link" color="#FFFFFF">
        Timelines
      </Button>
    </Link>

    <Link href="#roadmapsm">
      <Button variant="link" color="#FFFFFF">
        Roadmap
      </Button>
    </Link>
    <Link href="#monetizationsm">
      <Button variant="link" color="#FFFFFF">
        Monetization
      </Button>
    </Link>
    <Link href="#teamsm">
      <Button variant="link" color="#FFFFFF">
        Team
      </Button>
    </Link>
    <Link href="#milestonesm">
      <Button variant="link" color="#FFFFFF">
        Milestones
      </Button>
    </Link>
  </Flex>
       


      </Flex>
    );
  }
  