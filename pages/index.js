import React from "react";
import HeroSection from "../components/HeroSection";
import NoluFeatures from "../components/NoluFeatures";
import TokenSaleTerms from "../components/TokenSaleTerms";
import BinanceSmartChain from "../components/BinanceSmartChain";
import Tokenomics from "../components/Tokenomics";
import NoluSaleRoadmap from "../components/NoluSaleRoadmap";
import ProjectMonetization from "../components/ProjectMonetization";
import MilestoneNolu from "../components/MilestoneNolu";

import MeetNoluTeam from "../components/MeetNoluTeam";


import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";



export default function App() {
  return (
    <Flex flexDir="column" w="100vw">

    
      <HeroSection>
        <Navbar />
      </HeroSection>
      
      <NoluFeatures/>

      <TokenSaleTerms/>

      <BinanceSmartChain/>

      <Tokenomics/>

      <NoluSaleRoadmap/>

      <ProjectMonetization/>
      <MeetNoluTeam/>
      <MilestoneNolu/>
      

    

   


    </Flex>
  );
}
