import { Flex, Image, Button, Text } from "@chakra-ui/react";

export default function DesktopNoluSaleRoadmap () {
  return (
 
 /*      mother flex for all */

 <Flex direction="column" my="3rem">

 {/*   flex for roadmap heading  */}
 <Flex
   alignItems="center"
   justifyContent="center"
   direction="column"
   w="100%"
 >
   <Text fontSize="3xl" fontWeight="bold" color="#151855">
     Nolu Sale Roadmap
   </Text>
 </Flex>

 {/*   flex for roadmap sub heading  */}

 <Flex
   alignItems="center"
   justifyContent="center"
   px="2.2rem"
   direction="column"
   w="100%"
 >
   <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
     Explore development
   </Text>
 </Flex>



  {/*  mother flex for  (phase 1 - phase 6) start */}

  <Flex direction="row" gap="4">

  
 {/*   flex for mother phase 1  */}

 <Flex direction="column">
 {/*   flex for phase 1  heading part */}

 <Flex
   backgroundColor="#3859C2"
   h="5.87rem"
   ml="1.2rem"
 
   borderRadius={"20px 20px 0px 0px"}
   direction="column"
   alignItems="center"
   justifyContent="center"
 >
   <Text fontSize="lg" color="#FFFFFF">
     Phase 1
   </Text>
   <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
     Game Universe
   </Text>
 </Flex>

 {/*   flex for phase 1  description part */}

 <Flex
   backgroundColor="#FAFAFF"
   border="1px solid #EDF2F7"
   py="1.5rem"
   ml="1.2rem"
   w="95%"
   direction="column"
 >
   <Flex w="100%" px="2rem" mt="1rem">
     <Text w="20%" fontSize="lg" color="#000000">
       <strong>1</strong>
     </Text>

     <Text w="80%" fontSize="lg" color="#000000">
       <strong>Blade of Carnage</strong> <br />
       Early Accesst | PC MMORPG <br />
       Main Game
       
       <Image w="5%" src="maingame.png" alt="maingame" />XR MMORPG
     </Text>
   </Flex>

   <Flex w="100%" px="2rem" mt="3.5rem">
     <Text w="20%" fontSize="lg" color="#000000">
       <strong>2</strong>
     </Text>

     <Text w="80%" fontSize="lg" color="#000000">
       <strong>Expansion: Sequel of Boc</strong>
     </Text>
   </Flex>

   <Flex w="100%" px="2rem" mt="3.5rem">
     <Text w="20%" fontSize="lg" color="#000000">
       <strong>3</strong>
     </Text>

     <Text w="80%" fontSize="lg" color="#000000">
       <strong>Sequel 2 : BoC</strong>
     </Text>
   </Flex>
 </Flex>
</Flex>

{/*   flex for mother phase 1 end */}







 {/*   flex for mother phase 2  */}

 <Flex direction="column">
   {/*   flex for phase 2  heading part */}

   <Flex
     backgroundColor="#4F68D1"
     h="5.87rem"
     ml="1.2rem"
     direction="column"
     alignItems="center"
     justifyContent="center"
   >
     <Text fontSize="lg" color="#FFFFFF">
       Phase 2
     </Text>
     <Text mt="0.5rem" fontSize="xl" fontWeight="bold" color="#FFFFFF">
       Entertainment and Events Universe
     </Text>
   </Flex>

   {/*   flex for phase 2  description part */}

   <Flex
     backgroundColor="#FAFAFF"
     border="1px solid #EDF2F7"
     py="1.5rem"
     w="95%"
     ml="1.2rem"
     direction="column"
   >
     <Flex w="100%" px="2rem" mt="1rem">
       <Text w="20%" fontSize="lg" color="#000000">
         <strong>4</strong>
       </Text>

       <Text w="80%" fontSize="lg" color="#000000">
         <strong>Visual Concerts, Music Festivals</strong>
       </Text>
     </Flex>

     <Flex w="100%" px="2rem" mt="3.5rem">
       <Text w="20%" fontSize="lg" color="#000000">
         <strong>5</strong>
       </Text>

       <Text w="80%" fontSize="lg" color="#000000">
         <strong>Tiktok and Instagram</strong> <br />
         User generated content
       </Text>
     </Flex>

     <Flex w="100%" px="2rem" mt="3.5rem">
       <Text w="20%" fontSize="lg" color="#000000">
         <strong>6</strong>
       </Text>

       <Text w="80%" fontSize="lg" color="#000000">
         <strong>Open World MMORPG</strong> <br />
         vr mmorpg
       </Text>
     </Flex>
   </Flex>
 </Flex>

 
 {/*   flex for mother phase 2 end */}
  
  
  
  



  </Flex>
  {/*  mother flex for  (phase 1 - phase 6) end */}




















 {/*   flex for button */}

 <Flex alignItems="center" w="100%" justifyContent="center">
   <Button
     w="90%"
     borderRadius="0.5rem"
     mt="1rem"
     ml="1.5rem"
     h="3.18rem"
     colorScheme="pink"
     variant="solid"
     bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
   >
     Learn More
   </Button>
 </Flex>
</Flex>
/* mother flex for all  end  */

    )
}