import React from "react";

import {
  chakra,
  Avatar,
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
    <React.Fragment>
      <chakra.header
        bgColor="transparent"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src="logo.png" alt="logo.png" ml={5} />

              <VisuallyHidden>NOLUVERSE</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="lg" fontWeight="medium" ml="3" color={"white"}>
              NOLUVERSE{" "}
              <Text fontSize="xs" ml={1}>
                {" "}
                --Technologies--
              </Text>
            </chakra.h1>
          </Flex>

          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={4}
              mr={20}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button variant="link" color="#FFFFFF">
                Features
              </Button>
              <Button variant="link" color="#FFFFFF">
                Terms
              </Button>
              <Button variant="link" color="#FFFFFF">
                Timelines
              </Button>
              <Button variant="link" color="#FFFFFF">
                Roadmap
              </Button>
              <Button variant="link" color="#FFFFFF">
                Monetization
              </Button>
              <Button variant="link" color="#FFFFFF">
                Team
              </Button>
              <Button variant="link" color="#FFFFFF">
                Milestones
              </Button>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
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

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
