import React from "react";
import HeroSection from "../components/HeroSection";
import NoluFeatures from "../components/NoluFeatures";
import TokenSaleTerms from "../components/TokenSaleTerms";
import BinanceSmartChain from "../components/BinanceSmartChain";
import Tokenomics from "../components/Tokenomics";


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
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <Flex flexDir="column">

    
      <HeroSection>
        <Navbar />
      </HeroSection>
      
      <NoluFeatures/>

      <TokenSaleTerms/>

      <BinanceSmartChain/>

      <Tokenomics/>

   


    </Flex>
  );
}
