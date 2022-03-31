import { Icon, Box, Image, Flex, Text, Link } from "@chakra-ui/react";

import { RiYoutubeFill, RiFacebookCircleFill } from "react-icons/ri";

export default function MeetNoluTeam() {
  return (
    /*mother flex for all */

    <Flex direction="column" my="3rem" mx="3rem" id="teamsm">
      {/*   flex for team heading  */}
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Meet the Nolu Team
        </Text>
      </Flex>

      {/*   flex for team sub heading  */}

      <Flex alignItems="center" justifyContent="center" direction="column">
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#5F72DB">
          The Leaders Behind the Project
        </Text>
      </Flex>

      {/*   mother flex for all cards  */}

      <Flex
        alignSelf="center"
        mt="4rem"
        direction={["column", "column", "column", "column", "row"]}
      >
        {/*    flex for 1st card  */}

        <Flex>
          <Box
            w="sm"
            mx="auto"
            py={8}
            px={8}
            bg={"linear-gradient(138.65deg, #9797FF 15.08%, #4169E1 85.18%)"}
            shadow="lg"
            boxShadow={
              "0px 4px 54px rgba(97, 122, 236, 0.6), 0px 10px 46px rgba(19, 55, 91, 0.07)"
            }
            rounded="lg"
            borderRadius="20px"
          >
            <Flex justifyContent={{ base: "center", md: "center" }} mt={-16}>
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                alt="Marvin Yee"
                src="marvin1.jpg"
              />
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="1rem">
              <Text fontSize="xl" color="#FFFFFF" fontWeight="bold">
                Marvin Yee
              </Text>
            </Flex>

            <Flex mt="1rem" alignItems="center" justifyContent="center">
              {" "}
              <Text fontSize="xl" color="#FFFFFF">
                {" "}
                14 years of valuable experience in <br /> marketing and sales
                with <br /> expertise in consulting, product <br /> development,
                and management.{" "}
              </Text>
            </Flex>
          </Box>
        </Flex>

        {/*    flex for 1st card end  */}

        {/*    flex for 2nd card start  */}

        <Flex mt="5rem">
          <Box
            w="sm"
            mx="auto"
            ml="1rem"
            py={4}
            px={8}
            bg={"#FFFFFF"}
            shadow="lg"
            rounded="lg"
            borderRadius="20px"
          >
            <Flex justifyContent={{ base: "center", md: "center" }} mt={-16}>
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                alt="Illusives Studio"
                src="illusives4.jpeg"
              />
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="1rem">
              <Text fontSize="xl" color="#151855" fontWeight="bold">
                Illusives
              </Text>
            </Flex>

            <Flex mt="1rem" alignItems="center" justifyContent="center">
              <Text fontSize="xl" color="#000000">
                This Bangladesh-based team <br /> consists of eight talented
                game <br /> developers specializing in the use <br /> of Unreal
                Engine.
              </Text>
            </Flex>

            <Flex
              mt="2rem"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Link
                href="https://www.youtube.com/channel/UC334vi8250UOjtuvhuxtzQg"
                isExternal
              >
                <Icon as={RiYoutubeFill} fontSize="2xl" />
              </Link>
            </Flex>
          </Box>
        </Flex>

        {/*    flex for 2nd card end  */}

        {/*    flex for 3rd card start  */}

        <Flex mt="5rem">
          <Box
            w="sm"
            mx="auto"
            ml="1rem"
            py={4}
            px={8}
            bg={"#FFFFFF"}
            shadow="lg"
            rounded="lg"
            borderRadius="20px"
          >
            <Flex justifyContent={{ base: "center", md: "center" }} mt={-16}>
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                alt="metaBitSutio"
                src="metaBitSutio1.png"
              />
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="1rem">
              <Text fontSize="xl" color="#151855" fontWeight="bold">
                MetaBit Studio
              </Text>
            </Flex>

            <Flex mt="1rem" alignItems="center" justifyContent="center">
              <Text fontSize="xl" color="#000000">
                With decades of combined <br /> experience in Silicon Valley,
                this <br /> team of five full-stack developers <br /> has
                expertise in server software.
              </Text>
            </Flex>

            <Flex
              mt="2rem"
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap="8"
            >
              <Link href="https://www.facebook.com/metaBitStudio" isExternal>
                <Icon as={RiFacebookCircleFill} fontSize="2xl" />
              </Link>
            </Flex>
          </Box>
        </Flex>

        {/*    flex for 3rd card end  */}
      </Flex>

      {/*   end  */}
    </Flex>
  );
}
