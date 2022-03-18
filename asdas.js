import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Square,
  Heading,
  Stack,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

export default function HeroSection({ children }) {
  return (
    <Box
      h="1086px"
      
      backgroundImage="url('/blue.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {children}
      <Flex>
        <Flex w={"50%"} flexDir="column" alignItems="center" color="#fff">
          <Stack my="120" mr="40" alignItems="">
            <Heading as="h2" size="2xl" mb="8">
              {" "}
              Join the
              <br />
              Noluverse
            </Heading>
            <Text>
              The most exciting virtual reality project is about to <br />{" "}
              launch. Be part of it!
            </Text>

            <Stack direction={["column", "row"]} py="5" spacing="3">
              <Button
                w="187px"
                borderRadius="8px"
                h="51px"
                colorScheme="pink"
                variant="solid"
                bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
              >
                Learn More
              </Button>
              <Icon
                as={AiOutlineDownload}
                background="rgba(255, 255, 255, 0.14);"
                w="54px"
                h="51px"
                borderRadius="8px"
                fontSize="2xl"
              />

              <Text fontSize="lg" py="3">
                View the White Paper
              </Text>
            </Stack>

            <Stack direction="row" py="5" spacing="10">
              <Icon as={FaDiscord} fontSize="2xl" />

              <Icon as={ImTwitter} fontSize="2xl" />

              <Icon as={FaTelegramPlane} borderRadius="8px" fontSize="2xl" />
            </Stack>
          </Stack>
        </Flex>

        <Flex w={"50%"} flexDir="column" alignItems="center">
          <Image src="hero.png" alt="logopng" />
          <Heading as="h2" size="lg" color="white" mt="10">
            Total sale will start in
          </Heading>
          <Flex  py="5" gap="2" justifyContent="space-between">
            <Flex flexDir="column">
              <Text
                fontSize="lg"
                color="white"
                w="55px"
                h="37px"
                borderRadius="10px"
                background=" rgba(255, 255, 255, 0.1);"
                px="5"
                py="1"
              >
                3
              </Text>
              <Text fontSize="xs" px="3" py="1" color="white">
                DAYS
              </Text>
            </Flex>

            <Flex flexDir="column">
              <Text
                fontSize="lg"
                color="white"
                w="55px"
                h="37px"
                borderRadius="10px"
                background=" rgba(255, 255, 255, 0.1);"
                px="4"
                py="1"
              >
                12
              </Text>
              <Text fontSize="xs" px="4" py="1" color="white">
                HRS
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text
                fontSize="lg"
                color="white"
                w="55px"
                h="37px"
                borderRadius="10px"
                background=" rgba(255, 255, 255, 0.1);"
                px="4"
                py="1"
              >
                31
              </Text>
              <Text fontSize="xs" px="4" py="1" color="white">
                MIN
              </Text>
            </Flex>

            <Flex flexDir="column">
              <Text
                fontSize="lg"
                color="white"
                w="55px"
                h="37px"
                borderRadius="10px"
                background=" rgba(255, 255, 255, 0.1);"
                px="4"
                py="1"
              >
                28
              </Text>
              <Text fontSize="xs" px="4" py="1" color="white">
                SEC
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
