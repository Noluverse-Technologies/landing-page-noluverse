import React from "react";
import Head from "next/head";

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
  const [isLargerThan1224] = useMediaQuery("(min-width: 1224px)");
  const [isLessThan1224] = useMediaQuery("(max-width: 1224px)");

  return (
    <>
      <Head>
        <title>Noluverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* for desktop------------------------- */}
      {isLargerThan1224 ? (
        <Flex direction="column" w="100vw">
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
      {isLessThan1224 ? (
        <Flex direction="column" w="100vw">
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
