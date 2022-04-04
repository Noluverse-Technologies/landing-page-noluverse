import { Flex, Image, Text } from "@chakra-ui/react";

export default function PracticeSaleTimeline() {
  return (
    /* mother flex for all start */
    <Flex
      alignItems="center"
      justifyContent="center"
      direction={["column", "column", "column", "column", "column"]}
      w="100%"
      id="timelinesm"
    >
      {/* flex for heading start */}
      <Flex alignItems="center" justifyContent="center" direction="column">
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Nolu Sale Timeline
        </Text>
      </Flex>
      {/* flex for heading  end*/}

      {/* mother flex for all group start */}

      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        direction={["column", "column", "column", "row", "row"]}
        gap={["3", "3", "3", "4rem", "7rem"]}
      >
        {/* mother flex for 1st group start */}

        <Flex
          gap="5"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
          direction={["row", "row", "row", "column", "column"]}
          
        >
      
          {/* flex for 1st circle part start */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="8rem"
            h="8rem"
            borderRadius="50%"
            bgGradient="linear(138.65deg, #EAEAEA 15.08%, #D5D5D7 85.18%)"
            position="relative"
          >
          <Image
          w="1.25rem"
          h="1.25rem"
          src="R.png"
          alt="rightarrow"
          position="absolute"
  bottom={["0", "0", "0", "-1.5rem", "-1.5rem"]}
  left={["3rem", "0", "0", "-1.5rem", "-1.5rem"]}

        />
            <Text fontSize="lg" color="#151855">
              <strong>MAR 25</strong>{" "}
            </Text>
            <Text fontSize="sm" color="#151855">
              {" "}
              2022
            </Text>
          </Flex>
          {/* flex for 1st circle part end */}

          {/* flex for 1st TEXT part start */}

          <Flex justifyContent="center">
            {" "}
            <Text color="#000000" fontSize="lg" textAlign="center">
              Early Bird Presale{" "}
            </Text>{" "}
          </Flex>

          {/* flex for 1st TEXT part end */}
        </Flex>

        {/* mother flex for 1st group end */}

        {/* mother flex for 2nd group start */}

        <Flex
          gap="5"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
          direction={["row", "row", "row", "column", "column"]}
        >
          {/* flex for 2nd circle part start */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="8rem"
            h="8rem"
            borderRadius="50%"
            bgGradient="linear(138.65deg, #EAEAEA 15.08%, #D5D5D7 85.18%)"
          >
            <Text fontSize="lg" color="#151855">
              <strong>MAY 15</strong>{" "}
            </Text>
            <Text fontSize="sm" color="#151855">
              {" "}
              2022
            </Text>
          </Flex>
          {/* flex for 2nd circle part end */}

          {/* flex for 2nd TEXT part start */}

          <Flex justifyContent="center">
            {" "}
            <Text color="#000000" fontSize="lg" textAlign="center">
              Blade of Carnage <br/> EA release{" "}
            </Text>{" "}
          </Flex>

          {/* flex for 2nd TEXT part end */}
        </Flex>

        {/* mother flex for 2nd group end */}

        {/* mother flex for 3rd group start */}

        <Flex
          gap="5"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
          direction={["row", "row", "row", "column", "column"]}
        >
          {/* flex for 3rd circle part start */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="8rem"
            h="8rem"
            borderRadius="50%"
            bgGradient="linear(138.65deg, #EAEAEA 15.08%, #D5D5D7 85.18%)"
          >
            <Text fontSize="lg" color="#151855">
              <strong>JUN 1</strong>{" "}
            </Text>
            <Text fontSize="sm" color="#151855">
              {" "}
              2022
            </Text>
          </Flex>
          {/* flex for 3rd circle part end */}

          {/* flex for 3rd TEXT part start */}

          <Flex justifyContent="center">
            {" "}
            <Text color="#000000" fontSize="lg" textAlign="center">
              Launch on <br/>  Pinksale.Finance{" "}
            </Text>{" "}
          </Flex>

          {/* flex for 3rd TEXT part end */}
        </Flex>

        {/* mother flex for 3rd group end */}

        {/* mother flex for 4th group start */}

        <Flex
          gap="5"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
          direction={["row", "row", "row", "column", "column"]}
        >
          {/* flex for 4th circle part start */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            w="8rem"
            h="8rem"
            borderRadius="50%"
            bgGradient="linear(138.65deg, #9797FF 15.08%, #4169E1 85.18%)"
          >
            <Text fontSize="lg" color="#151855">
              <strong>JUN 15</strong>{" "}
            </Text>
            <Text fontSize="sm" color="#151855">
              {" "}
              2022
            </Text>
          </Flex>
          {/* flex for 4th circle part end */}

          {/* flex for 4th TEXT part start */}

          <Flex justifyContent="center">
            {" "}
            <Text color="#000000" fontSize="lg" textAlign="center">
              Open Sale on <br/>  PancakeSwap{" "}
            </Text>{" "}
          </Flex>

          {/* flex for 4th TEXT part end */}
        </Flex>

        {/* mother flex for 4th group end */}
      </Flex>
      {/* mother flex for all group end */}
    </Flex>
    /* mother flex for all end */
  );
}
