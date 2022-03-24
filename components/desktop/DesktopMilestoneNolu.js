import { Flex, Image, Button, Text,Link } from "@chakra-ui/react";

export default function DesktopMilestoneNolu() {
  return (
    /*mother flex for all */

    <Flex direction="column" mt="5rem" id="milestonelg" >
      {/*  mother flex for combined milestone nolu pard and images  start (upper part of full page) */}

      <Flex direction="column">
        {/*   flex for milestone heading and subheading  */}
        <Flex alignItems="center" justifyContent="center" direction="column">
          <Text fontSize="3xl" fontWeight="bold" color="#151855">
            Milestone in Nolu
          </Text>
        </Flex>

        {/*   flex for milestone heading and subheading end  */}

        {/* mother  flex for split (content, buttons) and image start */}

        <Flex w="100%" pl="5rem" pt="1rem">
          {/* mother  flex for split (content, buttons) start (left portion) */}

          <Flex w="50%" direction="Column">
            {/*  mother flex for charcter development*/}

            <Flex my="1rem" w="100%">
              <Flex ml="1.5rem" mt="1.5rem" w="10%">
                <Image
                  w="1.3rem"
                  h="1.3rem"
                  src="m_righticon.png"
                  alt="righticon"
                />
              </Flex>

              <Flex direction="column" w="90%" mt="1rem">
                <Text fontSize="lg" color="#091B27" fontWeight="bold">
                  Character Development and Items
                </Text>

                <Text fontSize="lg" mt="0.5rem" color="#091B27">
                  We’ll release all the exciting characters and digital assets
                  within the game.
                </Text>
              </Flex>
            </Flex>

            {/*  mother flex for game script*/}

            <Flex my="1rem" w="100%">
              <Flex ml="1.5rem" mt="1.5rem" w="10%">
                <Image
                  w="1.3rem"
                  h="1.3rem"
                  src="m_righticon.png"
                  alt="righticon"
                />
              </Flex>

              <Flex direction="column" w="90%" mt="1rem">
                <Text fontSize="lg" color="#091B27" fontWeight="bold">
                  Game Script
                </Text>

                <Text fontSize="lg" mt="0.5rem" color="#091B27">
                  Members will get to review the primary storyline of the game.
                </Text>
              </Flex>
            </Flex>

            {/*  mother flex for combat ai*/}

            <Flex my="1rem" w="100%">
              <Flex ml="1.5rem" mt="1.5rem" w="10%">
                <Image
                  w="1.3rem"
                  h="1.3rem"
                  src="m_righticon.png"
                  alt="righticon"
                />
              </Flex>

              <Flex direction="column" w="90%" mt="1rem">
                <Text fontSize="lg" color="#091B27" fontWeight="bold">
                  Combat AI for Early Access
                </Text>

                <Text fontSize="lg" mt="0.5rem" color="#091B27">
                  Players get to test out early combat AI.
                </Text>
              </Flex>
            </Flex>

            {/*   flex for button */}

            <Flex pt="2rem">
              <Button
                w="12rem"
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
          </Flex>

          {/* mother  flex for split (content, buttons) end (left portion) */}

          {/*   flex for milestone image start (right portion)  */}

          <Flex w="50%" >
            <Image w="100%" pr="5rem" pb="2rem" src="milestone.jpg" alt="milestone" />
          </Flex>

          {/*   flex for milestone image end (right portion)  */}
        </Flex>

        {/* mother  flex for split (content, buttons) and image end */}
      </Flex>

      {/*  mother flex for combined milestone nolu pard and images   end (upper part of full page) */}

      {/*   mother flex for footer start(lower part of page) */}

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
        <Link href="#featlg"  >
           
        <Button variant="link" color="#FFFFFF">
        Features
      </Button>
        </Link>

        <Link href="#termslg"  >
       
        <Button variant="link" color="#FFFFFF">
        Terms
      </Button>
        </Link>
        <Link href=""  >
       
        <Button variant="link" color="#FFFFFF">
        Timelines
      </Button>
        </Link>
        
        <Link href="#roadmaplg"  >
       
        <Button variant="link" color="#FFFFFF">
        Roadmap
      </Button>
        </Link>
        <Link href="#monetizationlg"  >
       
        <Button variant="link" color="#FFFFFF">
        Monetization
      </Button>
        </Link>
        <Link href="#teamboth"  >
       
        <Button variant="link" color="#FFFFFF">
        Team
      </Button>
        </Link>
        <Link href="#milestonelg"  >
       
        <Button variant="link" color="#FFFFFF">
        Milestones
      </Button>
        </Link>
        </Flex>
      </Flex>

      {/*   mother flex for footer end(lower part of page) */}
    </Flex>

    /* mother flex for all end */
  );
}
