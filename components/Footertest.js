import {
    Flex,
    Image,
    Text,
    SimpleGrid,
    Box,
    Link,
    Button,
    useMediaQuery
  } from "@chakra-ui/react";
  
  export default function footertest() {

    const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
    const [isLessThan1100] = useMediaQuery("(max-width: 1100px)");
    return (
     
      <>
        {/* for desktop------------------------- */}
        {isLargerThan1100 ? (
         
      <Flex
      justifyContent="space-between"
      h="26.8125rem"
      backgroundImage="url('/footerdesktop.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100vw"
    >
      {/*    mother flex for comibined nolu logo and right tex start  (child flex of footer) */}

      <Flex direction="column" pt="18rem" pl="8rem">
        {/*    flex for nolu logo (child flex of footer) */}
        <Flex>
          <Image w="3.175rem" h="3.87rem" src="logo.png" alt="logo.png" />
        </Flex>

        {/*    flex for footer text (child flex of footer) */}
        <Flex pt="1rem">
          <Text size="xs" color="#FFFFFF">
            ©2022 Noluverse.com, All Rights Reserved.
          </Text>
        </Flex>
      </Flex>

      {/*    mother flex for comibined nolu logo and right tex end  (child flex of footer) */}

      {/*    flex for footer nav button (child flex of footer) */}
      <Flex direction="row" wrap="wrap" gap="10" pt="19rem" pr="3rem">
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

        ) : null}


         {/* for mobile------------------------- */}
      {isLessThan1100 ? (
        <Flex  w="100vw">
        {/*   mother flex for footer */}
        <Flex
        direction="column"
        h="48rem"    
        backgroundImage="url('/footerdesktop.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={["100%", "100%", "100vw", "100vw", "100vw"]}
      >
        {/*    flex for nolu logo (child flex of footer) */}
        <Flex mt="32rem">
          <Image src="logo.png" w="3.875em" alt="logo.png" ml={5} />
        </Flex>

        {/*    flex for footer nav button (child flex of footer) */}
        <Flex pl="1.5rem" direction="row" wrap="wrap" gap="6" mt="3rem">
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
          <Link href="#teamboth">
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

        {/*    flex for footer text (child flex of footer) */}
        <Flex mt="3rem" pl="1.5rem">
          <Text size="xs" color="#FFFFFF">
            ©2022 Noluverse.com, All Rights Reserved.
          </Text>
        </Flex>
      </Flex>
   
        </Flex>
      ) : null}
      
      </>
    );
  }
  