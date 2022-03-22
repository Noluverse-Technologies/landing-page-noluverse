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

import DesktopTokenomics from "../components/desktop/DesktopTokenomics";
import DesktopTokenSaleTerms from "../components/desktop/DesktopTokenSaleTerms";



export default function App() {
  return (

/*  for mobile.......................
    
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
    </Flex> */


/* for desktop */

<Flex flexDir="column" w="100vw">

    <DesktopTokenSaleTerms/>
    <BinanceSmartChain/>
    <DesktopTokenomics/>
    <MeetNoluTeam/>

</Flex> 


    
  );
}
