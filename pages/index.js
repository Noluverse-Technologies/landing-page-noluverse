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

import { Flex, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import DesktopTokenSaleTerms from "../components/desktop/DesktopTokenSaleTerms";
import DesktopMilestoneNolu from "../components/desktop/DesktopMilestoneNolu";
import DesktopTokenoMics from "../components/desktop/DesktopTokenoMics";
import DesktopProjectMonetization from "../components/desktop/DesktopProjectMonetization";
import DesktopNoluSaleRoadmap from "../components/desktop/DesktopNoluSaleRoadmap";
import DesktopHeroSection from "../components/desktop/DesktopHeroSection";
import DesktopNoluFeatures from "../components/desktop/DesktopNoluFeatures";

export default function App() {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");

  return (
    <>
      {/* for desktop------------------------- */}
      {isLargerThan450 ? (
        <Flex flexDir="column" w="100vw">
          <DesktopHeroSection>
            <Navbar />
          </DesktopHeroSection>
          <DesktopNoluFeatures />
          <DesktopTokenSaleTerms />
          <BinanceSmartChain />
          <DesktopTokenoMics />
          <DesktopNoluSaleRoadmap />
          <DesktopProjectMonetization />
          <MeetNoluTeam />
          <DesktopMilestoneNolu />
        </Flex>
      ) : null}
      {/* for mobile------------------------- */}
      {isLessThan450 ? (
        <Flex flexDir="column" w="100vw">
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
        </Flex>
      ) : null}
    </>
  );
}
