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

import DesktopTokenSaleTerms from "../components/desktop/DesktopTokenSaleTerms";
import DesktopMilestoneNolu from "../components/desktop/DesktopMilestoneNolu";
import DesktopTokenoMics from "../components/desktop/DesktopTokenoMics";
import DesktopProjectMonetization from "../components/desktop/DesktopProjectMonetization";
import DesktopNoluSaleRoadmap from "../components/desktop/DesktopNoluSaleRoadmap";
import DesktopHeroSection from "../components/desktop/DesktopHeroSection";

export default function App() {
  return (
    /* for mobile....................... */

  /*   <Flex flexDir="column" w="100vw">
      <HeroSection>
        <Navbar />
      </HeroSection>

      <NoluFeatures />

      <TokenSaleTerms />

      <BinanceSmartChain />
      <Tokenomics />
      <NoluSaleRoadmap />

      <ProjectMonetization />
      <MeetNoluTeam />
      <MilestoneNolu />
    </Flex> */

    /* for desktop------------------------- */

    <Flex flexDir="column" w="100vw">
      <DesktopHeroSection>
        <Navbar />
      </DesktopHeroSection>
      <DesktopTokenSaleTerms />
      <BinanceSmartChain />
      <DesktopTokenoMics />
      <DesktopNoluSaleRoadmap />
      <DesktopProjectMonetization />
      <MeetNoluTeam />
      <DesktopMilestoneNolu />
    </Flex>
  );
}
