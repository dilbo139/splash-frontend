import { Box, Center, Text, Image, Flex, Avatar, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Video(props: any) {
  const router = useRouter();
  const isMyprofileNFTpage = router.pathname === "/MyProfile";
  const parseUrlArr = props?.videoIpfsUrl?.split("ipfs://");
  const ipfsUrl = parseUrlArr?.[1];
  console.log("ipfsUrl:", ipfsUrl);

  return (
    <Center py="20" paddingTop={"none"}>
      <Box
        bgImage="url('/images/card-background.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="repeat"
        width={{ base: "400px", md: "420px" }}
        height={{ base: "370px", md: "400px" }}
      >
        <Box flexDirection={"column"}>
          <Box justifyContent={"center"} display={"flex"} position={"relative"}>
            {props.videoIpfsUrl ? (
              <Box mx={"autpo"} py={3}>
                {/* <VideoPlayer /> */}
                <video
                  controls
                  className="video rounded-lg w-full h-[120%] max-w-[500px]"
                  id="video"
                  preload="metadata"
                  // poster="https://airnfts.s3.amazonaws.com/nft-images/Doge_Father_1619037447162.jpg"
                  style={{
                    objectFit: "contain",
                    borderRadius: "13px",
                    width: "370px",
                    height: "100%",
                    margin: "0 auto",
                    marginTop: "18px",
                  }}
                >
                  {/* <source src="video.mp4" type="video/mp4"></source> */}
                  <source
                    // src="https://lens.infura-ipfs.io/ipfs/QmXDzrC6BwVwTXoC6CmosEMC4DHSJstfYsAfbcjh4CdeCa/nowft-intro.mp4"
                    src={`https://lens.infura-ipfs.io/ipfs/${ipfsUrl}`}
                    type="video/mp4"
                  ></source>
                </video>
              </Box>
            ) : (
              <Image
                src={props.videoImage}
                borderRadius={"13px"}
                width={"90%"}
                marginTop={"18px"}
              />
            )}

            {isMyprofileNFTpage ? (
              <Box
                position={"absolute"}
                top={"28px"}
                right={"35px"}
                width={"80px"}
                textAlign={"center"}
                fontWeight={"500"}
                paddingY={"1"}
                borderRadius={"13px"}
                bgColor={"brand.purple"}
              >
                NFT #{props.NFTs}
              </Box>
            ) : (
              <Box
                position={"absolute"}
                top={"28px"}
                right={"35px"}
                width={"130px"}
                borderRadius={"13px"}
                bgColor={"#222836"}
                fontSize={"small"}
                color={"white"}
                padding={"5px"}
              >
                <Text textAlign={"center"}>Expected Earnings</Text>
                <Text
                  flexDirection={"row"}
                  display={"flex"}
                  gap={"8px"}
                  paddingLeft={"5px"}
                  paddingTop={"2px"}
                  fontWeight={"600"}
                >
                  <Image src="/images/splash-token.svg" width={"5"} />{" "}
                  {props.videoEarn}
                </Text>
              </Box>
            )}
            <>
              {isMyprofileNFTpage ? (
                ""
              ) : (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  position={"absolute"}
                  bottom={"15px"}
                  color={"white"}
                  width={"80%"}
                  justifyContent={"space-between"}
                >
                  <Text
                    display={"flex"}
                    gap={"10px"}
                    padding={"1.5"}
                    paddingX={"2"}
                    borderRadius={"13px"}
                    bgColor={"#222836"}
                  >
                    <Image src="/images/eye.svg" width={"5"} /> {props.views}
                  </Text>
                  <Text
                    padding={"1.5"}
                    borderRadius={"13px"}
                    bgColor={"#222836"}
                  >
                    {props.time}
                  </Text>
                </Box>
              )}
            </>
          </Box>
          <Link href="/VideoDetail">
            <Box paddingX={"8"}>
              <Text
                color={"white"}
                paddingTop={"2.5"}
                height={"70px"}
                fontSize={"xl"}
                overflow={"hidden"}
              >
                {props.videoTitle}
              </Text>
              <Flex paddingTop={"3"} gap={"5"}>
                <Avatar size={"md"} src={props.videoAvatar} />
                <Box color={"white"} display={"flex"} flexDirection={"column"}>
                  <Text>{props.avatarName}</Text>
                  <Text>{props.uploadDate} ago</Text>
                </Box>
              </Flex>
            </Box>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}

// export default function Card() {
//   return (
//     <Center py="20">
//       <Box
//         position="relative"
//         width={"300px"}
//         height={"300px"}
//         background="rgba(255, 255, 255, 0.05)"
//         backdropFilter="blur(5px)"
//         boxSizing="border-box"
//         clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
//         borderRadius={10}
//       >
//         <Stack pt={10} align={"center"}>
//           <Stack direction={"row"} align={"center"}>
//             <Text color={"white"}>
//               Revenue is unfairly distributed between the platform and users.
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
