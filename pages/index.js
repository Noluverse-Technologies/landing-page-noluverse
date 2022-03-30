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
import DesktopNoluSaletime from "../components/desktop/DesktopNoluSaletime";
import DesktopMeetNoluTeam from "../components/desktop/DesktopMeetNoluTeam";
import DesktopBinanceSmartChain from "../components/desktop/DesktopBinanceSmartChain";
import SaleTimeline from "../components/SaleTimeline";

export default function App() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLessThan1100] = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      <Head>
        <title>Noluverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* for desktop------------------------- */}
      {isLargerThan1100 ? (
        <Flex w="100vw" justifyContent="center">
          <Flex
            zIndex={"-9999"}
            height={"35vh"}
            width={"100%"}
            position={"absolute"}
            backgroundImage="url('/bgHero.jpg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          ></Flex>
          <Flex direction="column" w="100%" maxW="1730px" minW="1280px">
            <DesktopHeroSection>
              <Navbar />
            </DesktopHeroSection>
            <DesktopNoluFeatures />
            <DesktopTokenSaleTerms />
            <DesktopBinanceSmartChain />
            <DesktopTokenoMics />
            <DesktopNoluSaletime />
            <DesktopNoluSaleRoadmap />
            <DesktopProjectMonetization />
            <DesktopMeetNoluTeam />
            <DesktopMilestoneNolu />
          </Flex>
        </Flex>
      ) : null}

      {/* for mobile------------------------- */}
      {isLessThan1100 ? (
        <Flex direction="column" w="100vw" overflow="hidden">
          <HeroSection>
            <Navbar />
          </HeroSection>

          <NoluFeatures />

          <TokenSaleTerms />

          <BinanceSmartChain />
          <Tokenomics />
          <SaleTimeline />
          <NoluSaleRoadmap />

          <ProjectMonetization />
          <MeetNoluTeam />
          <MilestoneNolu />
        </Flex>
      ) : null}
    </>
  );
}
