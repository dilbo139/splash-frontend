import React from "react";
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
} from "@chakra-ui/react";

const VideoHistory: React.FC = (props: any) => {
  return (
    <Flex
      gap={"25px"}
      paddingTop={"10px"}
      borderRadius={"16px"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={"10px"}
        fontSize={"xl"}
        rowGap={{ base: "5" }}
      >
        <Box
          justifyContent={"center"}
          display={"flex"}
          flexDirection={{ base: "column" }}
          position={"relative"}
          width={"400px"}
        >
          <Image
            src={props.videoImage}
            borderRadius={"13px"}
            width={"90%"}
            marginTop={"18px"}
          />
          <Box
            display={"flex"}
            flexDirection={"row"}
            position={"absolute"}
            bottom={"15px"}
            marginLeft={{ base: "5" }}
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
              fontSize={"sm"}
            >
              <Image src="/images/eye.svg" width={"5"} /> {props.views}
            </Text>
            <Text
              fontSize={"sm"}
              padding={"1.5"}
              borderRadius={"13px"}
              bgColor={"#222836"}
            >
              {props.time}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          height={"auto"}
        >
          <Box paddingX={{ base: "unset", md: "8" }}>
            <Text
              color={"white"}
              paddingTop={"2.5"}
              // height={"20"}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={"500"}
              overflow={"hidden"}
              height={"120px"}
            >
              {props.videoTitle}
            </Text>
            <Flex gap={"5"} alignItems={"center"}>
              <Avatar size={"md"} src={props.videoAvatar} />
              <Box
                color={"white"}
                display={"flex"}
                flexDirection={"column"}
                fontSize={"md"}
              >
                <Text>{props.avatarName}</Text>
                <Text>{props.uploadDate} ago</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default VideoHistory;
