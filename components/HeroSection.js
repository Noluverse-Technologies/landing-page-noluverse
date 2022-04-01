import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  Flex,
  Image,
  Text,
  Heading,
  Link,
  Button,
  Icon,
  chakra,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

export default function HeroSection({ children }) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("4/22/2022 23:50:00 UTC-7");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    /* <chakra.span  pl={[0, "3rem", "3rem", "5rem", 0]}>  Join the</chakra.span>  */
    /* mother flex */

    <Flex
      direction="column"
      h={["85rem", "85rem", "115rem", "115rem", 0]}
      backgroundImage="url('/bgHero.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
    >
      {children}

      {/*   flex  for heading */}

      <Flex
        mt="5rem"
        ml="1rem"
        pl={[0, "10rem", "15rem", "20rem", 0]}
        w={["90%", "90%", "100%", "100%", "50%"]}
      >
        <Heading as="h2" size="2xl" mt="1rem" fontWeight={"bold"} color="#fff">
          Join the <br /> Noluverse Game
        </Heading>
      </Flex>

      {/*   flex  for headingParagraph */}

      <Flex
        ml="1rem"
        pl={[0, "10rem", "15rem", "20rem", 0]}
        w={["90%", "90%", "90%", "100%", "50%"]}
      >
        <Text mt="2rem" color="#fff" fontSize="lg">
          The most exciting virtual reality project is about to launch.
          <br />
          Be part of it!
        </Text>
      </Flex>

      {/*   flex  for buttons */}

      <Flex
        direction="column"
        ml="1rem"
        my="4"
        pl={[0, "10rem", "15rem", "20rem", 0]}
      >

      <Link href="#featsm">
      <Button
      w="15rem"
      borderRadius="0.5rem"
      h="3.18rem"
      colorScheme="pink"
      variant="solid"
      bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
    >
    Learn More
    </Button>
      </Link>
      

        {/*   flex  for white paper ( child flex of buttons flex) */}
        <Flex w="100%" direction="row" gap="4" mt="1rem">
          <Link href="/Noluverse White paper.pdf" isExternal>
            <Icon
              as={AiOutlineDownload}
              background="rgba(255, 255, 255, 0.14);"
              w="3.375rem"
              h="4rem"
              borderRadius="0.5rem"
              fontSize="2xl"
              color="#fff"
            />
          </Link>

          <Text color="#fff" w="80%" fontSize="lg" py="1rem" fontWeight="bold">
            View the White Paper
          </Text>
        </Flex>
      </Flex>

      {/*   flex  for social media icon */}

      <Flex
        ml="1rem"
        mt="2rem"
        color="#fff"
        direction="row"
        gap="8"
        pl={[0, "10rem", "15rem", "20rem", 0]}
      >
        <Link href="https://discord.com/invite/6EXGNU8J" isExternal>
          <Icon as={FaDiscord} fontSize="2xl" />
        </Link>
        <Link href="https://twitter.com/Noluverse/" isExternal>
          <Icon as={ImTwitter} fontSize="2xl" />
        </Link>
        <Link href="https://t.me/+z5umLpKnnpgzNzcx" isExternal>
          <Icon as={FaTelegramPlane} borderRadius="8px" fontSize="2xl" />
        </Link>
      </Flex>

      {/*   flex  for heroImage*/}

      <Flex w="100%" alignItems="center" mt="0.5rem" justifyContent="center">
        <Image
          w={["80%", "50%", "50%", "50%", "50%"]}
          src="hero.png"
          alt="hero"
        />
      </Flex>

      {/*   flex  for sale time*/}

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt="1rem"
      >
        <Heading as="h4" size="md" fontWeight="600" color="white" mt="10">
          TOKEN SALE ENDS IN
        </Heading>

        {/*   child flex of sale time flex */}

        <Flex w={["100%", "80%", "50%", "50%", "50%"]} py="2rem">
          <Flex
            w="25%"
            direction="column"
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
              {days}
            </Text>
            <Text fontSize="xs" px="3" py="1" color="white">
              DAYS
            </Text>
          </Flex>

          <Flex
            direction="column"
            w="25%"
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
              {hours}
            </Text>
            <Text fontSize="xs" px="4" py="1" color="white">
              HRS
            </Text>
          </Flex>
          <Flex
            direction="column"
            w="25%"
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
              {minutes}
            </Text>
            <Text fontSize="xs" px="4" py="1" color="white">
              MIN
            </Text>
          </Flex>

          <Flex
            direction="column"
            w="25%"
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
              {seconds}
            </Text>
            <Text fontSize="xs" px="4" py="1" color="white">
              SEC
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/*  mother sale flex end*/}
    </Flex>
  );
}
