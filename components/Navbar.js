import React from "react";
import Link from "next/link";

import {
  chakra,
  Text,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Flex
      bgColor="#000044"
      opacity={0.9}
      height={"70px"}
      shadow="md"
      position={"fixed"}
      width={"100vw"}
      left="50%"
      transform="translateX(-50%)"
      top={0}
      maxW="1730px"
      minW="1280px"
    >
      <Flex
        alignItems="center"
        justifyContent={"space-between"}
        width={"100%"}
        paddingX={"2rem"}
      >
        <Flex>
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Image
              src="nolutech.png"
              alt="logo.png"
              w={["9.356rem", "9.356rem", "13.875em"]}
            />

            <VisuallyHidden>NOLUVERSE</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="lg" fontWeight="medium" ml="3" color={"white"}>
            {/*   NOLUVERSE{" "}
              <Text fontSize="xs" ml={1}>
                {" "}
                --Technologies--
              </Text> */}
          </chakra.h1>
        </Flex>

        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={4} display={{ base: "none", md: "inline-flex" }}>
            <Link href="#featlg">
              <Button variant="link" color="#FFFFFF">
                Features
              </Button>
            </Link>

            <Link href="#termslg">
              <Button variant="link" color="#FFFFFF">
                Terms
              </Button>
            </Link>
            <Link href="#timelinelg">
              <Button variant="link" color="#FFFFFF">
                Timelines
              </Button>
            </Link>

            <Link href="#roadmaplg">
              <Button variant="link" color="#FFFFFF">
                Roadmap
              </Button>
            </Link>
            <Link href="#monetizationlg">
              <Button variant="link" color="#FFFFFF">
                Monetization
              </Button>
            </Link>
            <Link href="#teamboth">
              <Button variant="link" color="#FFFFFF">
                Team
              </Button>
            </Link>
            <Link href="#milestonelg">
              <Button variant="link" color="#FFFFFF">
                Milestones
              </Button>
            </Link>
          </HStack>

          <Box display={{ base: "inline-flex", md: "none" }} zIndex="999">
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("white", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              directionection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Link href="#featsm">
                <Button w="full" variant="ghost">
                  Features
                </Button>
              </Link>
              <Link href="#termssm">
                <Button w="full" variant="ghost">
                  Terms
                </Button>
              </Link>
              <Link href="#timelinesm">
                <Button w="full" variant="ghost">
                  Timelines
                </Button>
              </Link>

              <Link href="#roadmapsm">
                <Button w="full" variant="ghost">
                  Roadmap
                </Button>
              </Link>
              <Link href="#monetizationsm">
                <Button w="full" variant="ghost">
                  Monetization
                </Button>
              </Link>
              <Link href="#teamboth">
                <Button w="full" variant="ghost">
                  Team
                </Button>
              </Link>

              <Link href="#milestonesm">
                <Button w="full" variant="ghost">
                  Milestones
                </Button>
              </Link>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}
