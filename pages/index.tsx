import { Text, Box } from "@chakra-ui/react";
import Primary from "@components/Primary";
import Footer from "@components/Footer";

// import Test from "@components/test";

export default function Home() {
  return (
    <>
      <Box
        width="100vw"
        bgColor="brand.darkBlue"
        bgImage="url('/images/home-blur-bg.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="repeat"
        zIndex={-2}
        position="absolute"
        top={"520px"}
        minHeight={{ base: "1000px", sm: "900px", lg: "3000px" }}
        backgroundBlendMode="mutiply"
      ></Box>
      <Primary />
      <Footer />
    </>
  );
}

// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
//   GridItem,
//   Grid,
// } from "@chakra-ui/react";

// export default function Card() {
//   return (
//     <Center py="20">
//       <Box
//         position="relative"
//         width={"300px"}
//         height={"300px"}
//         backgroundImage="linear-gradient(to top, #080B2A 0%, #2d2a5a 100%)"
//         boxSizing="border-box"
//         clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
//         borderRadius={10}
//       >
//         <Image
//           position="absolute"
//           style={{
//             backdropFilter: "blur(14px) saturate(180%)",
//           }}
//           //   top="2px" /* equal to border thickness */
//           //   left="2px" /* equal to border thickness */
//           //   width="146px" /* container height - (border thickness * 2) */
//           //   height="146px" /* container height - (border thickness * 2) */
//           clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
//         />
//         <Stack pt={10} align={"center"}>
//           <Heading
//             fontSize={"xl"}
//             fontFamily={"body"}
//             fontWeight={600}
//             color={"white"}
//           >
//             Unfair Financial Incentives
//           </Heading>
//           <Stack direction={"row"} align={"center"}>
//             <Text textAlign={"center"} color={"brand.gray"} color={"white"}>
//               Revenue is unfairly distributed between the platform and users.
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
