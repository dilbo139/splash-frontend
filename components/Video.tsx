import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from "@/const/contracts";
import { useFollow } from "@/lib/useFollow";
import { CheckIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Text,
  Image,
  Flex,
  Avatar,
  Link,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

export default function Video(props: any) {
  const router = useRouter();
  const isMyprofileNFTpage = router.pathname === "/MyProfile";
  const { mutateAsync: followUser } = useFollow();

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
            <Image
              src={props.videoImage}
              borderRadius={"13px"}
              width={"90%"}
              marginTop={"18px"}
            />
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
          <Box paddingX={"8"}>
            <Link href="/VideoDetail">
              <Text
                color={"white"}
                paddingTop={"2.5"}
                height={"70px"}
                fontSize={"xl"}
                overflow={"hidden"}
              >
                {props.videoTitle}
              </Text>
            </Link>
            <Flex paddingTop={"3"} gap={"5"} justify="space-between">
              <Flex gap={3}>
                <Avatar size={"md"} src={props.videoAvatar} />
                <Box color={"white"} display={"flex"} flexDirection={"column"}>
                  <Text>{props.avatarName}</Text>
                  <Text>{props.uploadDate} ago</Text>
                </Box>
              </Flex>
              {/* TODO: Add follow button here */}
              <Web3Button
                contractAddress={LENS_CONTRACT_ADDRESS}
                contractAbi={LENS_CONTRACT_ABI}
                action={async () => {
                  if (!props.profileId) return;
                  console.log("clicked follow");
                  return await followUser(props.profileId);
                }}
                accentColor="transparent"
                className="followBtn"
              >
                <HStack
                  color="white"
                  _hover={{ cursor: "pointer", opacity: 0.7 }}
                >
                  {props.isFollowedByMe ? (
                    <>
                      <Text>Following</Text>
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <Text>Follow</Text>
                      <SmallAddIcon />
                    </>
                  )}
                </HStack>
              </Web3Button>
            </Flex>
          </Box>
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
