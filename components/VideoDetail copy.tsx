import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Container,
  Box,
  Avatar,
  Input,
} from "@chakra-ui/react";

interface Props {
  videoIpfsUrl: string;
}

const VideoDetail: React.FC<Props> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [moneyEarned, setMoneyEarned] = useState(0);
  const rate = 0.1;

  const [expectedEarnings, setExpectedEarnings] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const video = videoRef.current;

    video.onloadedmetadata = function () {
      const ratePerSecond = 0.1;
      const duration = video.duration;

      const earnings = duration * ratePerSecond;
      setExpectedEarnings(earnings);
    };
  }, [videoRef.current]);

  useEffect(() => {
    let intervalId: any;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimeSpent(timeSpent + 1);
        setMoneyEarned(timeSpent * rate);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying, timeSpent]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    let intervalId: any;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimeSpent(timeSpent + 1);
        setMoneyEarned(timeSpent * rate);
        localStorage.setItem("currentEarnings", `${moneyEarned}`);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      localStorage.setItem("currentEarnings", `${moneyEarned}`);
    };
  }, [isPlaying, timeSpent, moneyEarned]);

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLVideoElement>) => {
    if (event.key === " ") {
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <Container
      maxWidth={"80%"}
      my={12}
      marginLeft={{ base: "none", md: "300px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"100vw"}
    >
      <Flex flexDirection={"column"} color={"white"}>
        {/* Video Player */}
        {/* <Box
          width={"1300px"}
          height={"700px"}
          display={"flex"}
          bgImage="url('/images/video-player.svg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="repeat"
        ></Box> */}
        <div>
          <video
            id="myVideo"
            ref={videoRef}
            src={
              // `https://lens.infura-ipfs.io/ipfs/${props.videoIpfsUrl}`
              `${props.videoIpfsUrl}`
              // "https://lens.infura-ipfs.io/ipfs/QmbCaUZz8TjvARetXFfaJdY6BL3aa9WVR33sV4FKECTgxB/SPLASH%20-%2010%20November%202022.mp4"
            }
            controls={true}
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
          />
        </div>

        <Flex
          fontSize={"lg"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"20px"}
            paddingTop={"30px"}
          >
            <Box
              flexDirection={"row"}
              display={"flex"}
              width={"200px"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Image src="/images/eye.svg" width={"5"} />
              <Text>432,903 Views</Text>
            </Box>
            <Box
              flexDirection={"row"}
              display={"flex"}
              width={"200px"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Image width={"5"} src="/images/globe.svg" />
              <Text>Uploaded 3 days ago</Text>
            </Box>
          </Box>
          <Box
            flexDirection={"row"}
            display={"flex"}
            width={"200px"}
            alignItems={"center"}
            gap={"10px"}
            paddingTop={"30px"}
          >
            <Button
              bg={"none"}
              borderRadius={"16px"}
              border={"solid"}
              borderColor={"white"}
              borderWidth={"2px"}
            >
              <Image src="/images/heart.svg" />
            </Button>
            <Text>45,000 likes</Text>
          </Box>
        </Flex>
        <Text fontSize={"3xl"} paddingY={"20px"}>
          Web3 Unlocked: Decoding the Mysteries of Decentralized Technology
        </Text>
        {/* Earning and NFT BOXES */}
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          paddingY={"4"}
        >
          {/* Earning Box */}
          <Box
            background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
            borderRadius={"12px"}
            paddingX={"30px"}
            paddingY={"20px"}
            width={{ base: "full", md: "60%" }}
          >
            <Text fontSize={"3xl"} fontWeight={"600"}>
              Earnings
            </Text>
            <Flex gap={"25px"} paddingTop={"10px"} borderRadius={"16px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Video Status</Text>
                <Text
                  flexDirection={"row"}
                  display={"flex"}
                  gap={"10px"}
                  fontWeight={"500"}
                  fontSize={"2xl"}
                >
                  {isPlaying ? "Playing" : "Paused"}
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Watching Time</Text>
                <Text
                  flexDirection={"row"}
                  display={"flex"}
                  gap={"10px"}
                  fontWeight={"500"}
                  fontSize={"2xl"}
                >
                  <Image src="/images/timer.png" width={"40px"} />
                  {timeSpent}s
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Current Earnings</Text>
                <Text
                  flexDirection={"row"}
                  display={"flex"}
                  gap={"10px"}
                  fontWeight={"500"}
                  fontSize={"2xl"}
                >
                  <Image src="/images/splash-token.svg" width={"7"} />
                  {moneyEarned.toFixed(2)}
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Expected Earnings</Text>
                <Text
                  flexDirection={"row"}
                  display={"flex"}
                  gap={"10px"}
                  fontWeight={"500"}
                  fontSize={"2xl"}
                >
                  <Image src="/images/splash-token.svg" width={"7"} />
                  {expectedEarnings.toFixed(6)}
                </Text>
              </Box>
            </Flex>
          </Box>
          {/* NFT Box  - future feature*/}
          {/* <Box
            background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
            borderRadius={"12px"}
            paddingX={"30px"}
            paddingY={"20px"}
            marginTop={{ base: "10", md: "none" }}
            width={{ base: "full", md: "60%" }}
          >
            <Text fontSize={"3xl"} fontWeight={"600"}>
              NFT
            </Text>
            <Flex gap={"25px"} paddingTop={"10px"} borderRadius={"16px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Max Supply</Text>
                <Text flexDirection={"row"} display={"flex"} gap={"10px"}>
                  <Image src="/images/splash-token.svg" width={"5"} />
                  50
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>NFTs Available</Text>
                <Text flexDirection={"row"} display={"flex"} gap={"10px"}>
                  12
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                fontSize={"xl"}
              >
                <Text color={"gray.400"}>Price per NFT</Text>
                <Text flexDirection={"row"} display={"flex"} gap={"10px"}>
                  <Image src="/images/splash-token.svg" width={"5"} />5
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  bgColor={"brand.purple"}
                  color={"white"}
                  borderRadius={"13px"}
                  fontSize={"xl"}
                  fontWeight={"medium"}
                  paddingY={"13px"}
                >
                  Mint Video NFT
                </Button>
              </Box>
            </Flex>
          </Box> */}
        </Flex>
        {/* Creator Intro */}
        <Flex flexDirection={"row"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"13px"}
            alignItems={"center"}
          >
            <Avatar src="/images/video-avatar-3.svg" />
            <Box paddingRight={"50px"}>
              <Text fontSize={"2xl"}>Mastermind</Text>
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={"10px"}
                color={"gray.400"}
              >
                <Text>20K followers</Text>
                <Text>|</Text>
                <Text>12 videos</Text>
              </Box>
            </Box>
            <Button color={"black"} borderRadius={"16px"} paddingX={"30px"}>
              Follow
            </Button>
          </Box>
        </Flex>
        {/* Video Desc */}
        <Flex flexDirection={"column"} gap={"20px"} paddingY={"10"}>
          <Text>
            Web3 Unlocked: Decoding the Mysteries of Decentralized Technology is
            a must-watch for anyone interested in the future of the internet.
            Join our expert panel as they dive deep into the world of Web3 and
            explore the potential of decentralized technology.{" "}
          </Text>
          <Text>
            Discover how blockchain, peer-to-peer networks, and other innovative
            technologies are changing the way we interact online. Learn about
            the challenges and opportunities facing Web3, and gain a better
            understanding of this exciting and rapidly evolving field. Don't
            miss this opportunity to unlock the mysteries of Web3 technology and
            stay ahead of the curve!
          </Text>
        </Flex>
        {/* Comments Box */}
        <Flex
          background={"rgba(255, 255, 255, 0.1)"}
          borderRadius={"13px"}
          padding={"30px"}
          flexDirection={"column"}
          gap={"5"}
        >
          <Text fontSize={"2xl"} fontWeight={"500"}>
            Comments
          </Text>
          <Box display={"flex"} gap={"10"} paddingY={"2"} paddingBottom={"5"}>
            <Input
              placeholder="Add a commnent ..."
              bgColor={"rgba(0, 0, 0, 0.4)"}
              borderRadius={"8px"}
              border="none"
              height={"45px"}
            />
            <Button bgColor={"brand.purple"}>Send</Button>
          </Box>
          {/* comment */}
          <Flex flexDirection={"column"} gap={"5"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"5"}
            >
              <Avatar src="/images/comment-avatar-1.svg" />
              <Text fontWeight={"500"} fontSize={"lg"}>
                amyrobson
              </Text>
            </Box>
            <Text>The panelists were fantastic!</Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"5"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"5"}
            >
              <Avatar src="/images/comment-avatar-2.svg" />
              <Text fontWeight={"500"} fontSize={"lg"}>
                gregert.lens
              </Text>
            </Box>
            <Text>
              I've been following the development of Web3 for a while now, but
              this video provided a lot of new insights that I hadn't considered
              before
            </Text>
          </Flex>
          <Flex flexDirection={"column"} gap={"5"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"5"}
            >
              <Avatar src="/images/comment-avatar-3.svg" />
              <Text fontWeight={"500"} fontSize={"lg"}>
                mattdfg.lens
              </Text>
            </Box>
            <Text>
              The discussion on the challenges and opportunities of Web3 was
              particularly insightful. I'm excited to see where this technology
              will go.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default VideoDetail;
