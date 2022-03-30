import React from "react";

import {
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Icon,
  Box,
  Link,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

export default function DesktopHeroSection({ children }) {
  return (
    /* mother box */

    <Box
      h="80rem"
      backgroundImage="url('/bgHero.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      px={[0,0, 0, "10rem",0]}
      py={[0,0, 0, "1rem",0]}
    >
      {children}

      {/*   mother  flex for left content and right side image with sale time  start*/}

      <Flex w="100%">
        {/*   left side content mother started */}

        <Flex flexDir="column" w="50%" p="7rem">
          {/*   flex  for heading */}

          <Flex>
            <Heading
              as="h2"
              size="2xl"
              py="1rem"
              fontWeight={"bold"}
              color="#fff"
            >
              Join the
              <br />
              Noluverse Game
            </Heading>
          </Flex>

          {/*   flex  for headingParagraph */}

          <Flex>
            <Text mt="2rem" color="#fff" fontSize="lg">
              The most exciting virtual reality project is about to launch.
         
              <br />
              Be part of it!
            </Text>
          </Flex>

          {/*   flex  for white button and paper  */}
          <Flex flexDir="row" gap="4" my="2rem">
            <Button
              w="11.875rem"
              borderRadius="0.5rem"
              h="3.18rem"
              colorScheme="pink"
              variant="solid"
              bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
            >
              Learn More
            </Button>

            <Icon
              as={AiOutlineDownload}
              background="rgba(255, 255, 255, 0.14);"
              w="3.37rem"
              h="3.18rem"
              borderRadius="0.5rem"
              fontSize="2xl"
              color="#fff"
            />

            <Text color="#fff" fontSize="lg" py="1rem" fontWeight="bold">
              View the White Paper
            </Text>
          </Flex>

          {/*   flex  for social media icon */}

          <Flex mt="2rem" color="#fff" flexDir="row" gap="3rem">
            <Link href="" isExternal>
              <Icon as={FaDiscord} fontSize="2xl" />
            </Link>
            <Link href="" isExternal>
              <Icon as={ImTwitter} fontSize="2xl" />
            </Link>
            <Link href="" isExternal>
              <Icon as={FaTelegramPlane} fontSize="2xl" />
            </Link>
          </Flex>
        </Flex>

        {/*   left side content mother flex end */}

        {/*   right side image and sale mother flex start */}

        <Flex flexDir="column" w="50%">
          {/*   flex  for heroImage*/}

          <Flex
            w="100%"
            alignItems="center"
            mt="0.5rem"
            justifyContent="center"
          >
            <Image w="80%" src="hero.png" alt="hero" />
          </Flex>

          {/*   flex  for sale time*/}

          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt="1rem"
          >
            <Heading as="h4" size="md" fontWeight="600" color="white" mt="10">
              TOTAL SALE ENDS IN
            </Heading>

            {/*   child flex of sale time flex */}

            <Flex pt="2rem" gap="2">
              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="lg"
               
                  borderRadius="10px"
                  background=" rgba(255, 255, 255, 0.1);"
                  px="2rem"
                  py="0.5rem"
                  fontWeight="bold"
                  color="rgba(255, 255, 255, 0.1)"
                >
                  21
                </Text>
                <Text fontSize="xs" px="3" py="1" color="white">
                  DAYS
                </Text>
              </Flex>

              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="lg"
                  color="white"
                  borderRadius="10px"
                  background=" rgba(255, 255, 255, 0.1);"
                  px="2rem"
                  py="0.5rem"
                  fontWeight="bold"
                >
                  12
                </Text>
                <Text fontSize="xs" px="4" py="1" color="white">
                  HRS
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="lg"
                  color="white"
                  borderRadius="10px"
                  background=" rgba(255, 255, 255, 0.1);"
                  px="2rem"
                  py="0.5rem"
                  fontWeight="bold"
                >
                  31
                </Text>
                <Text fontSize="xs" px="4" py="1" color="white">
                  MIN
                </Text>
              </Flex>

              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="lg"
                  color="white"
                  borderRadius="10px"
                  background=" rgba(255, 255, 255, 0.1);"
                  px="2rem"
                  py="0.5rem"
                  fontWeight="bold"
                >
                  28
                </Text>
                <Text fontSize="xs" px="4" py="1" color="white">
                  SEC
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/*  mother sale flex end*/}
        </Flex>

        {/*   right side image and sale mother flex end */}
      </Flex>

      {/*   mother  flex for left content and right side imagewith sale time end*/}
    </Box>
  );
}
